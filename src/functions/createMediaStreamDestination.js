"use strict";

const MediaStreamAudioDestinationNode = require("../class/MediaStreamAudioDestinationNode");

const createMediaStreamDestination = function () {
	return new MediaStreamAudioDestinationNode(this, 1);
};

module.exports = createMediaStreamDestination;
