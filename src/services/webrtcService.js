class WebRTCService {
  constructor() {
    this.peerConnection = null;
    this.localStream = null;
  }
  
  async initialize() {
    this.peerConnection = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });
  }
  
  async startLocalStream() {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });
    return this.localStream;
  }
  
  async createOffer() {
    const offer = await this.peerConnection.createOffer();
    await this.peerConnection.setLocalDescription(offer);
    return offer;
  }
  
  async setRemoteDescription(description) {
    await this.peerConnection.setRemoteDescription(description);
  }
  
  async createAnswer() {
    const answer = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(answer);
    return answer;
  }
}

module.exports = WebRTCService;
