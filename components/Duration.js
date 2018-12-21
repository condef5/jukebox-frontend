import React from 'react';
import Timer from './ui/Timer';

export default function Duration({ className, seconds }) {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} className={className}>
      <Timer seconds={seconds} />
    </time>
  );
}
