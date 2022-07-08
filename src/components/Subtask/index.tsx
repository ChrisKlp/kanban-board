import { useState } from 'react';
import * as S from './style';

export type SubtaskProps = {
  children: React.ReactNode;
  onChecked?: (checked: boolean) => void;
};

function Subtask({ children, onChecked }: SubtaskProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    if (onChecked) onChecked(checked);
  };

  return (
    <S.Wrapper checked={checked} onClick={handleClick}>
      <S.Checkbox />
      <S.Label>{children}</S.Label>
    </S.Wrapper>
  );
}

export default Subtask;
