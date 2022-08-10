import BoardForm from 'components/BoardForm';
import Heading from 'components/Heading';
import TaskCard from 'components/TaskCard';
import useModal from 'hooks/useModal';
import { TBoard } from 'models';
import * as S from './style';

type BoardProps = {
  board: TBoard;
};

function Board({ board }: BoardProps) {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <>
      <S.Wrapper>
        {board.columns.map(({ id, name, tasks }) => (
          <S.ColumnWrapper key={id}>
            <S.Header>{`${name.toUpperCase()} (${tasks.length})`}</S.Header>
            <S.TaskList>
              {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </S.TaskList>
          </S.ColumnWrapper>
        ))}
        <S.ColumnWrapper newColumn>
          <S.NewColumnButton onClick={openModal}>
            <Heading size="xlarge" variant="secondary">
              + New Column
            </Heading>
          </S.NewColumnButton>
        </S.ColumnWrapper>
      </S.Wrapper>
      {isModalOpen && (
        <BoardForm title="Edit Board" board={board} closeModal={closeModal} />
      )}
    </>
  );
}

export default Board;
