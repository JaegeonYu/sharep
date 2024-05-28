import React, { useEffect, useRef, useState } from 'react';
import * as S from './SelectCelStyle';
import * as T from '@types';
import * as Comp from '@components';

export default function SelectCel({ initialState, fixedWidth, usingFor, readonly, onUpdate }: T.ApiSelectCelProps) {
  const celRef = useRef<HTMLButtonElement>(null);
  const [value, setValue] = useState(initialState || '');

  const handleCelClick = (toggledValue: boolean) => {
    if (celRef.current === null || readonly || usingFor === 'STATE') return;

    if (toggledValue) celRef.current?.focus();
    else celRef.current?.blur();
  };

  const handleListOptionClick = (e: React.MouseEvent) => {
    if (readonly || usingFor === 'STATE') return;

    setValue(String(e.currentTarget.ariaValueText));
    onUpdate && onUpdate({ key: 'method', value: e.currentTarget.ariaValueText });
    if (celRef.current) {
      celRef.current.blur();
      handleCelClick(false);
    }
  };

  return (
    <S.Wrapper
      className="hover-bg-dark"
      onClick={() => handleCelClick(true)}
      onFocus={() => handleCelClick(true)}
      onBlur={() => handleCelClick(false)}
      $fixedWidth={fixedWidth}
      disabled={readonly || usingFor === 'STATE'}
      ref={celRef}
    >
      <S.Palceholder role="button">{OPTIONS[usingFor][value]}</S.Palceholder>
      <S.OptionUlWrapper>
        {Object.keys(OPTIONS[usingFor]).map((key, idx) => (
          <S.OptionLi
            className="hover-bg-dark"
            aria-valuetext={key}
            key={`${usingFor}-${idx}`}
            onClick={handleListOptionClick}
          >
            {OPTIONS[usingFor][key]}
          </S.OptionLi>
        ))}
      </S.OptionUlWrapper>
    </S.Wrapper>
  );
}

const OPTIONS: { [usingFor: string]: { [res: string]: React.ReactNode } } = {
  PRIORITY: {
    HIGH: <Comp.PriorityBadge priority="HIGH" />,
    MEDIUM: <Comp.PriorityBadge priority="MEDIUM" />,
    LOW: <Comp.PriorityBadge priority="LOW" />,
  },
  STATE: {
    YET: <Comp.StatusBadge status="YET" />,
    NOW: <Comp.StatusBadge status="NOW" />,
    DONE: <Comp.StatusBadge status="DONE" />,
  },
  METHOD: {
    GET: <Comp.MethodBadge name="GET" />,
    POST: <Comp.MethodBadge name="POST" />,
    PUT: <Comp.MethodBadge name="PUT" />,
    PATCH: <Comp.MethodBadge name="PATCH" />,
    DELETE: <Comp.MethodBadge name="DELETE" />,
  },
};
