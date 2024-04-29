import BaseLabelWithInput from '@/components/InputWithLabel/InputWithLabel';
import React from 'react';

export default function TaskCreationForm() {
  return (
    <>
      <div>TaskCreationForm</div>
      <div style={{ border: '1px solid black' }}>
        <BaseLabelWithInput id="title" type="text" value="" onChange={() => console.log()}>
          ddd
        </BaseLabelWithInput>
      </div>
    </>
  );
}
