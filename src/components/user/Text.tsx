// src/components/user/Text.tsx
import React from 'react';

interface TextProps {
  text: string;
  fontSize: string;
}

export const Text: React.FC<TextProps> = ({ text, fontSize }) => (
  <p style={{ fontSize }}>{text}</p>
);