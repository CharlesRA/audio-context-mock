createMediaStreamSource = function () {
	var osc = this.createOscillator();
	osc.type = "sine";
	var gain = this.createGain();
	gain.gain.value = 0.0;
	osc.connect(gain);
	osc.start(0);
	return gain;
};

module.exports = createMediaStreamSource;
