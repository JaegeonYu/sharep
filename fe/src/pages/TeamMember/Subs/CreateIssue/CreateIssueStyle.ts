import styled from 'styled-components';
import { Plus } from 'lucide-react';
import * as Comp from '@components';
import { PALETTE } from '@/styles';

export const CreateNewIssue = styled(Plus)`
  position: absolute;
  top: 0px;
  right: 0px;
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 116px;
  background-color: white;
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`;

export const LabelContainer = styled(Comp.InputWithLabel.Label)`
  &,
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  flex-direction: column;
  align-items: flex-end;
  height: 116px;
  padding: 16px;

  span {
    font-size: 10px;
    line-height: 32px;
    color: ${PALETTE.SUB_BLACK};
  }
`;

export const TitleInput = styled(Comp.InputWithLabel.Input)`
  width: 100%;
  font-weight: 700;
`;
