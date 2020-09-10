"use strict";

const {AudioNode} = require("web-audio-engine").api;

class MediaElementAudioSourceNode extends AudioNode {
	constructor(context) {
		super(context);
	}
}

module.exports = MediaElementAudioSourceNode;
