import React, { useState, useEffect, useRef } from 'react';
import { Disc, Volume2, VolumeX, Radio } from 'lucide-react';

/**
 * Vinyl record sound synthesizer using Web Audio API.
 * Synthesizes warm analog turntable crackle and subtle low-frequency acoustic warmth.
 * Completely standalone, instant loading, 0 external audio dependencies.
 */
export default function VinylPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const noiseSourceRef = useRef(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // Create crackle buffer (5 seconds of looping vinyl floor)
    const bufferSize = ctx.sampleRate * 5;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      // Pink noise filter
      const white = Math.random() * 2 - 1;
      const pink = (lastOut + 0.02 * white) / 1.02;
      lastOut = pink;

      // Occasional random crackle impulses
      let crackle = 0;
      if (Math.random() < 0.0008) {
        crackle = (Math.random() * 2 - 1) * 0.45;
      } else if (Math.random() < 0.0002) {
        crackle = (Math.random() * 2 - 1) * 0.8;
      }

      data[i] = pink * 0.05 + crackle;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = true;

    // Filter to warm analog telephone / vinyl warmth (low pass around 1200Hz, high pass at 60Hz)
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 850;
    filter.Q.value = 1.0;

    const gain = ctx.createGain();
    gain.gain.value = volume;

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    source.start(0);
    noiseSourceRef.current = source;
    gainNodeRef.current = gain;
  };

  const togglePlay = () => {
    if (!audioCtxRef.current) {
      initAudio();
      setIsPlaying(true);
    } else {
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
        setIsPlaying(true);
      } else if (isPlaying) {
        audioCtxRef.current.suspend();
        setIsPlaying(false);
      } else {
        audioCtxRef.current.resume();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setTargetAtTime(isPlaying ? volume : 0, audioCtxRef.current.currentTime, 0.05);
    }
  }, [volume, isPlaying]);

  return (
    <div className="inline-flex items-center gap-2 border-hairline px-3 py-1.5 rounded-[3px] bg-linen text-espresso transition-colors hover:border-espresso">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.05em] focus:outline-none"
        title={isPlaying ? 'Pause vinyl crackle' : 'Play vinyl turntable needle audio'}
        aria-label="Toggle vinyl turntable sound"
      >
        <span className={`inline-block relative w-4 h-4 flex-shrink-0 ${isPlaying ? 'animate-spin-slow text-burnt-orange' : 'text-coffee-dust'}`}>
          <Disc className="w-4 h-4" />
        </span>
        <span className="hidden sm:inline text-[11px] font-mono">
          {isPlaying ? 'TURNTABLE: ON (33⅓ RPM)' : 'VINYL NEEDLE: OFF'}
        </span>
        <span className="sm:hidden text-[11px] font-mono">
          {isPlaying ? '33 RPM' : 'VINYL'}
        </span>
      </button>

      {isPlaying && (
        <button
          onClick={() => setVolume(v => (v > 0.1 ? 0.05 : 0.3))}
          className="text-coffee-dust hover:text-espresso transition-colors p-0.5"
          title="Adjust needle volume"
          aria-label="Volume toggle"
        >
          {volume > 0.1 ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
        </button>
      )}
    </div>
  );
}

