import React from 'react';
import ReactDOM from 'react-dom';

export default function PortalModal({ children }: { children: any }) {
  const el = document.getElementById('portalmodal');
  if (el) {
    return ReactDOM.createPortal(children, el);
  } else {
    return null;
  }
}
