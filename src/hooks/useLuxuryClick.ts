import { useCallback } from 'react';

export const useLuxuryClick = () => {
  const playClick = useCallback(() => {
    try {
      // Create audio context on interaction
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      
      // Master volume control
      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);
      
      // 1. The Low "Thud" (Sine wave)
      const lowOsc = ctx.createOscillator();
      lowOsc.type = 'sine';
      
      const lowGain = ctx.createGain();
      lowOsc.connect(lowGain);
      lowGain.connect(masterGain);
      
      // Frequency envelope for low thud (drops quickly)
      lowOsc.frequency.setValueAtTime(150, ctx.currentTime);
      lowOsc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
      
      // Amplitude envelope for low thud
      lowGain.gain.setValueAtTime(0, ctx.currentTime);
      lowGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.01);
      lowGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

      // 2. The Sharp "Click" (Triangle wave)
      const highOsc = ctx.createOscillator();
      highOsc.type = 'triangle';
      
      const highGain = ctx.createGain();
      highOsc.connect(highGain);
      highGain.connect(masterGain);
      
      // High click frequency
      highOsc.frequency.setValueAtTime(800, ctx.currentTime);
      
      // Amplitude envelope for sharp click (very fast decay)
      highGain.gain.setValueAtTime(0, ctx.currentTime);
      highGain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.005);
      highGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

      // Start oscillators
      lowOsc.start(ctx.currentTime);
      highOsc.start(ctx.currentTime);
      
      // Stop oscillators
      lowOsc.stop(ctx.currentTime + 0.1);
      highOsc.stop(ctx.currentTime + 0.05);

      // Cleanup
      setTimeout(() => {
        ctx.close();
      }, 150);
      
    } catch (e) {
      // Fail silently if Web Audio API is not supported or blocked
      console.warn('Audio synthesis failed', e);
    }
  }, []);

  return playClick;
};
