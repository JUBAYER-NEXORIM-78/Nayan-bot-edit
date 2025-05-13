const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'sing',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'Nyx',
  description: 'Download and play a YouTube song (under 10 minutes)',
  commandCategory: 'Media',
  usages: 'sing [search query]',
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  try {
    const query = args.join(' ');
    if (!query) {
      return api.sendMessage('Please provide a search query!', event.threadID, event.messageID);
    }
    api.sendMessage('⏳ Searching for your song...', event.threadID, event.messageID);
    const searchResponse = await axios.get(`https://mostakim.onrender.com/mostakim/ytSearch?search=${encodeURIComponent(query)}`);
    const parseDuration = (timestamp) => {
      const parts = timestamp.split(':').map(part => parseInt(part));
      let seconds = 0;
      if (parts.length === 3) {
        seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
      } else if (parts.length === 2) {
        seconds = parts[0] * 60 + parts[1];
      }
      return seconds;
    };
    const filteredVideos = searchResponse.data.filter(video => {
      try {
        const totalSeconds = parseDuration(video.timestamp);
        return totalSeconds < 600;
      } catch {
        return false;
      }
    });
    if (filteredVideos.length === 0) {
      return api.sendMessage('No short videos found (under 10 minutes)!', event.threadID, event.messageID);
    }
    const selectedVideo = filteredVideos[0];
    const tempFilePath = path.join(__dirname, 'temp_audio.m4a');
    const apiResponse = await axios.get(`https://mostakim.onrender.com/m/sing?url=${selectedVideo.url}`);
    if (!apiResponse.data.url) {
      throw new Error('No audio URL found in response');
    }
    const writer = fs.createWriteStream(tempFilePath);
    const audioResponse = await axios({
      url: apiResponse.data.url,
      method: 'GET',
      responseType: 'stream'
    });
    audioResponse.data.pipe(writer);
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
    await api.sendMessage(
      {
        body: `🎧 Now playing: ${selectedVideo.title}\nDuration: ${selectedVideo.timestamp}`,
        attachment: fs.createReadStream(tempFilePath)
      },
      event.threadID,
      event.messageID
    );
    fs.unlink(tempFilePath, (err) => {
      if (err) {
        api.sendMessage(`Error deleting temp file: ${err.message}`, event.threadID, event.messageID);
      }
    });
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};
