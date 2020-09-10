"use strict";

const MediaElementAudioSourceNode = require("../class/MediaElementAudioSourceNode");

const createMediaElementSource = function () {
	return new MediaElementAudioSourceNode(this);
};

module.exports = createMediaElementSource;
