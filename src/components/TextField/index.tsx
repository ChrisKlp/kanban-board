import { useState } from 'react';
import * as S from './style';

export type TextFieldProps = {
  onChange?: (value: string) => void;
  error?: string;
  placeholder?: string;
};

function TextField({ error, placeholder, onChange }: TextFieldProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    if (onChange) onChange(newValue);
  };
  return (
    <S.Wrapper error={error}>
      <S.Input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {!!error && <S.ErrorText>{error}</S.ErrorText>}
    </S.Wrapper>
  );
}

export default TextField;
