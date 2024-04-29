import React from 'react';

export interface QuillEditorProps {
  hiddenTooltip: boolean;
  value: string;
  stateSetter: React.Dispatch<React.SetStateAction<string>>;
  width: string;
  height: string;
  placeholder?: string;
}
