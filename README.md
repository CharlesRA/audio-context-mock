<h1 align="center">
  <img height="120px" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />&nbsp;&nbsp;&nbsp;&nbsp;
  <img height="120px" src="https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-dist.svg" />
</h1>

This project is based on [web-audio-engine](https://github.com/mohayonao/web-audio-engine), which is now archived. It aims to be able to use the APIS web methods in Node and add mocks of the missing functions of the initial project.

## Install

```
npm install audio-context-mock
```

## Usage

```javascript
const AudioContext = require("audio-context-mock");
const context = new AudioContext();
```

## API

| Method                                                          | Documentation Link                                                                         | Available |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | :-------: |
| [createMediaElementSource()](#createMediaElementSource)         | https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource     |    ✅     |
| [createMediaStreamDestination()](#createMediaStreamDestination) | https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamDestination |    ✅     |
| [createMediaStreamSource()](#createMediaStreamSource)           | https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource      |    ✅     |

---

### createMediaElementSource

```js
const audioSourceNode = context.createMediaElementSource();
```

### createMediaStreamDestination

```js
const destination = audioCtx.createMediaStreamDestination();
```

### createMediaStreamSource

```js
const audioSourceNode = context.createMediaStreamSource();
```

## Contributing

Contributions welcome !
