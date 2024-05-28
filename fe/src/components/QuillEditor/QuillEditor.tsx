import React from 'react';
import * as S from './QuillEditorStyle';
import * as T from '@types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function QuillEditor({
  hiddenTooltip,

  value,
  width,
  height,
  stateSetter,
  placeholder,
  readonly,
}: T.QuillEditorProps) {
  return (
    <S.EditorWrapper width={width} height={height} $isNoneStyle={hiddenTooltip}>
      <ReactQuill
        theme="snow"
        value={value}
        // modules={hiddenTooltip ? HIDDEN_TOOLBAR_MODULE : DEFAULT_MODULE}
        modules={DEFAULT_MODULE}
        formats={DEFAULT_TOOLBAR_FORMAT}
        onChange={stateSetter}
        placeholder={placeholder}
        readOnly={readonly}
      />
    </S.EditorWrapper>
  );
}

const HIDDEN_TOOLBAR_MODULE = { toolbar: false };
const DEFAULT_MODULE = {
  toolbar: [
    [{ size: ['small', false, 'large'] }],
    [{ color: [] }, { background: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
    ['clean'],
  ],
};

const HIDDEN_TOOLBAR_FORMAT = ['header', 'bold', 'italic', 'underline', 'link'];
const DEFAULT_TOOLBAR_FORMAT = [
  'font',
  'size',
  'header',
  'color',
  'background',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
];
