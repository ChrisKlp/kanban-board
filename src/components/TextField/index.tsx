import { InputHTMLAttributes, useState } from 'react';
import * as S from './style';

export type TextFieldProps = {
  error?: boolean;
  placeholder?: string;
  onInputChange?: (value: string) => void;
  textarea?: boolean;
  initialValue?: string;
} & InputHTMLAttributes<HTMLInputElement>;

function TextField({
  textarea,
  type,
  name,
  error,
  placeholder,
  initialValue = '',
  onInputChange,
}: TextFieldProps) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
    if (onInputChange) onInputChange(newValue);
  };
  return (
    <S.Wrapper error={error} textarea={textarea}>
      <S.Input
        as={textarea ? 'textarea' : 'input'}
        type={type || 'text'}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      {!!error && <S.ErrorText>Can’t be empty</S.ErrorText>}
    </S.Wrapper>
  );
}

export default TextField;
