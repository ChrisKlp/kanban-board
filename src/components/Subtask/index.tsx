import * as S from './style';

export type SubtaskProps = {
  checked?: boolean;
  children: React.ReactNode;
};

function Subtask({ checked, children }: SubtaskProps) {
  return (
    <S.Wrapper checked={checked}>
      <S.Checkbox />
      <S.Label>{children}</S.Label>
    </S.Wrapper>
  );
}

export default Subtask;
