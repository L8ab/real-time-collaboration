import React, { useRef, useEffect } from 'react';
import WebRTCService from '../services/webrtcService';

const VideoCall = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const webrtc = new WebRTCService();
  
  useEffect(() => {
    webrtc.initialize();
    webrtc.startLocalStream().then(stream => {
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    });
  }, []);
  
  return (
    <div className="video-call">
      <video ref={localVideoRef} autoPlay muted />
      <video ref={remoteVideoRef} autoPlay />
    </div>
  );
};

export default VideoCall;
