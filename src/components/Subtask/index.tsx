import { useState } from 'react';
import * as S from './style';

export type SubtaskProps = {
  children: React.ReactNode;
  onCheckboxChange?: (checked: boolean) => void;
  isChecked?: boolean;
};

function Subtask({ children, isChecked, onCheckboxChange }: SubtaskProps) {
  const [checked, setChecked] = useState(isChecked || false);

  const handleClick = () => {
    setChecked(!checked);
    if (onCheckboxChange) onCheckboxChange(!checked);
  };

  return (
    <S.Wrapper checked={checked} onClick={handleClick}>
      <S.Checkbox />
      <S.Label>{children}</S.Label>
    </S.Wrapper>
  );
}

export default Subtask;
