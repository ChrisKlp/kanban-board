import { useRef, useState } from 'react';
import iconChevronDown from 'assets/icon-chevron-down.svg';
import Text from 'components/Text';
import useOnClickOutside from 'hooks/useOnClickOutside';
import * as S from './style';

type SelectProps = {
  title: string;
  options: string[];
  onSelect?: (option: string) => void;
  className?: string;
};

function Select({ className, title, options, onSelect }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(title);
  const ref = useRef(null);

  const onToggle = () => setIsOpen(!isOpen);
  const onClose = () => setIsOpen(false);
  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onClose();
    if (onSelect) onSelect(option);
  };

  useOnClickOutside(ref, onClose);

  return (
    <S.Wrapper ref={ref} className={className}>
      <S.Title onClick={onToggle} isOpen={isOpen}>
        <Text as="span" size="large">
          {selectedOption}
        </Text>
        <img src={iconChevronDown} alt="Icon arrow Down" />
      </S.Title>
      {!!isOpen && (
        <S.Content>
          {options.map((option) => (
            <S.Option key={option} onClick={() => handleSelect(option)}>
              {option}
            </S.Option>
          ))}
        </S.Content>
      )}
    </S.Wrapper>
  );
}

export default Select;
