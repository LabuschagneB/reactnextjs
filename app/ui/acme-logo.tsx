'use client';
import React from 'react';

export default function AcmeLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#4F46E5" />
      <text
        x="16"
        y="21"
        textAnchor="middle"
        fontSize="12"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        ACME
      </text>
    </svg>
  );
}