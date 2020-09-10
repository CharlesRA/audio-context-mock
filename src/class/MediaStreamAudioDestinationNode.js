"use strict";

const {AudioNode} = require("web-audio-engine").api;

class MediaStreamAudioDestinationNode extends AudioNode {
	constructor(context, numberOfChannels) {
		super(context);
	}
}

module.exports = MediaStreamAudioDestinationNode;
