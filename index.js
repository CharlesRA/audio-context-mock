const AudioContext = require("web-audio-engine").StreamAudioContext;

const createMediaElementSource = require("./src/functions/createMediaElementSource");
const createMediaStreamDestination = require("./src/functions/createMediaStreamDestination");
const createMediaStreamSource = require("./src/functions/createMediaStreamSource");

AudioContext.prototype.createMediaElementSource = createMediaElementSource;
AudioContext.prototype.createMediaStreamDestination = createMediaStreamDestination;
AudioContext.prototype.createMediaStreamSource = createMediaStreamSource;

module.exports = AudioContext;
