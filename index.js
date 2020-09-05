const AudioContext = require("web-audio-engine").StreamAudioContext;

const createMediaStreamSource = require("./src/createMediaStreamSource");

AudioContext.prototype.createMediaStreamSource = createMediaStreamSource;

module.exports = AudioContext;
