import React, { useEffect, useRef, useState } from 'react';
import * as S from './TextCelStyle';
import * as T from '@types';
import * as Y from 'yjs';
import { QuillBinding } from 'y-quill';
import { WebsocketProvider } from 'y-websocket';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router';

const SOCKET_SERVER = import.meta.env.VITE_DEV_SOKET_SERVER;

export default function TextCel({ initialState, fixedWidth }: T.CelProps) {
  const yDoc = new Y.Doc();
  const { projectId } = useParams();
  const quillRef = useRef<ReactQuill>(null);
  const [value, setValue] = useState(initialState || '');
  const [isEditingMode, setIsEditingMode] = useState(false);
  const [isPressingShiftKey, setIsPressingShiftKey] = useState(false);
  const [socket, setSocket] = useState<WebsocketProvider | null>(null);

  useEffect(() => {
    let yText: Y.Text;
    let quill: ReturnType<ReactQuill['getEditor']>;
    let binding: QuillBinding;
    if (!quillRef.current) return;

    const socketInstance = new WebsocketProvider(`${SOCKET_SERVER}?projectId=${projectId}`, '', yDoc);
    yText = yDoc.getText('quill');
    quill = quillRef.current.getEditor();
    binding = new QuillBinding(yText, quill, socketInstance.awareness);

    setSocket(socketInstance);

    // return () => {
    //   binding?.destroy?.();
    //   yDoc?.destroy();
    //   socketInstance.destroy();
    // };
  }, []);

  useEffect(() => {
    if (isEditingMode && quillRef.current) quillRef.current.focus();
  }, [isEditingMode]);

  const handleCelClick = (toggledValue: boolean) => {
    if (toggledValue) quillRef.current?.focus();
    else quillRef.current?.blur();

    setIsEditingMode(() => toggledValue);
  };

  const handleKeyboardEventOnEditor = (e: any, toggledValue: boolean) => {
    if ((!isPressingShiftKey && e.keyCode === 13) || e.keyCode === 27) handleCelClick(false);
    if (e.keyCode === 16) setIsPressingShiftKey(() => toggledValue);
  };

  return (
    <S.Wrapper
      className="hover-bg-dark"
      onClick={() => handleCelClick(true)}
      $fixedWidth={fixedWidth}
      $isEditingMode={isEditingMode}
    >
      <ReactQuill
        theme="snow"
        ref={quillRef}
        value={String(value)}
        modules={HIDDEN_TOOLBAR_MODULE}
        formats={HIDDEN_TOOLBAR_FORMAT}
        onChange={setValue}
        onKeyDown={e => handleKeyboardEventOnEditor(e, true)}
        onKeyUp={e => handleKeyboardEventOnEditor(e, false)}
        onBlur={() => handleCelClick(false)}
        readOnly={!isEditingMode}
      />
    </S.Wrapper>
  );
}

const HIDDEN_TOOLBAR_MODULE = { toolbar: false };
const HIDDEN_TOOLBAR_FORMAT = ['header', 'bold', 'italic', 'underline', 'link'];
