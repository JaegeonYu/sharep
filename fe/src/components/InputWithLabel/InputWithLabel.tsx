import React, { Ref, forwardRef } from 'react';
import * as S from './InputWithLabelStyle';
import * as T from '@types';

const BaseInput = forwardRef(
  (
    { id, type, value, onChange, className, placeholder, accept, hidden, autoautoComplete }: T.BaseInputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <S.DefaultStyleRemovedInput
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        autoComplete={autoautoComplete}
        aria-hidden={hidden ? true : false}
        accept={accept}
        ref={ref}
      />
    );
  },
);

function BaseLabel({
  labelFor,
  className,
  children,
  role,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  onClick,
}: T.BaseLabelProps) {
  return (
    <label
      htmlFor={labelFor}
      className={className}
      role={role}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
    >
      {children}
    </label>
  );
}

function BaseLabelWithInput(props: T.BaseLabelWithInputProps) {
  const { id, type, value, onChange, children } = props;
  return (
    <BaseLabel labelFor={id}>
      {children}
      <BaseInput id={id} type={type} value={value} onChange={onChange} />
    </BaseLabel>
  );
}

BaseLabelWithInput.Input = BaseInput;
BaseLabelWithInput.Label = BaseLabel;

export default BaseLabelWithInput;
