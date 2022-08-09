import iconCross from 'assets/icon-cross.svg';
import Button from 'components/Button';
import Heading from 'components/Heading';
import Modal from 'components/Modal';
import Text from 'components/Text';
import TextField from 'components/TextField';
import { TBoard } from 'models';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import useBoardState from 'stores/boardState';
import { FieldErrors, validateBoardForm } from 'utils/validation';
import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

type BoardFormProps = {
  board?: TBoard;
  title: string;
  closeModal: () => void;
};

function BoardForm({ title, board, closeModal }: BoardFormProps) {
  const [values, setValues] = useState(
    board || {
      id: uuidv4(),
      name: '',
      columns: [
        {
          id: uuidv4(),
          name: '',
          tasks: [],
        },
      ],
    }
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const editBoard = useBoardState((s) => s.editBoard);
  const createBoard = useBoardState((s) => s.createBoard);

  const handleChange = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleAddColumn = () => {
    setValues((s) => ({
      ...s,
      columns: [
        ...s.columns,
        {
          id: uuidv4(),
          name: '',
          tasks: [],
        },
      ],
    }));
  };

  const handleColumnChange = (id: string, value: string) => {
    setValues((s) => ({
      ...s,
      columns: s.columns.map((column) =>
        column.id === id ? { ...column, name: value } : column
      ),
    }));
  };

  const handleDeleteColumn = (id: string) => {
    setValues((s) => ({
      ...s,
      columns: s.columns.filter((column) => column.id !== id),
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const fieldErrors = validateBoardForm(values);

    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }

    if (board) {
      editBoard(values);
    } else {
      createBoard(values);
    }

    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <Heading as="h2">{title}</Heading>
      <S.Form onSubmit={handleSubmit}>
        <S.Group>
          <Text as="label" variant="secondary">
            Board Name
          </Text>
          <TextField
            name="name"
            initialValue={values.name}
            error={errors.name}
            onInputChange={(v) => handleChange('name', v)}
            placeholder="e.g. Web Design"
          />
        </S.Group>
        <S.Group>
          <Text as="label" variant="secondary">
            Board Columns
          </Text>
          <S.ColumnsGroup>
            {values.columns.map(({ id, name: columnName }) => (
              <S.ColumnFieldGroup key={id}>
                <TextField
                  name={id}
                  initialValue={columnName}
                  error={errors[id]}
                  onInputChange={(v) => handleColumnChange(id, v)}
                  placeholder="e.g. Todo"
                />
                <S.DeleteButton
                  type="button"
                  onClick={() => handleDeleteColumn(id)}
                >
                  <ReactSVG src={iconCross} />
                </S.DeleteButton>
              </S.ColumnFieldGroup>
            ))}
            <Button type="button" variant="secondary" onClick={handleAddColumn}>
              + Add New Column
            </Button>
          </S.ColumnsGroup>
        </S.Group>
        <Button type="submit">
          {board ? 'Save Changes' : 'Create New Board'}
        </Button>
      </S.Form>
    </Modal>
  );
}

export default BoardForm;
