// src/components/ExportButton.tsx
import React from 'react';
import { useEditor } from '@craftjs/core';

const ExportButton: React.FC = () => {
  const { query } = useEditor();

  const handleExport = () => {
    const serializedData = query.serialize();
    // Implement logic to save or send serializedData for exporting
  };

  return <button onClick={handleExport}>Export</button>;
};

export default ExportButton;
