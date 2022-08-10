import BoardForm from 'components/BoardForm';
import Button from 'components/Button';
import Heading from 'components/Heading';
import useModal from 'hooks/useModal';
import useBoardState from 'stores/boardState';
import Wrapper from './style';

function EmptyBoard() {
  const { getActiveBoard } = useBoardState();
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <>
      <Wrapper>
        <Heading as="h2" variant="secondary">
          This board is empty. Create a new column to get started.
        </Heading>
        <Button size="large" onClick={openModal}>
          + Add New Column
        </Button>
      </Wrapper>
      {isModalOpen && (
        <BoardForm
          title="Edit Board"
          board={getActiveBoard()}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default EmptyBoard;
