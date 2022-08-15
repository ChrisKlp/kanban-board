/* eslint-disable react/jsx-props-no-spreading */
import BoardForm from 'components/BoardForm';
import Heading from 'components/Heading';
import TaskCard from 'components/TaskCard';
import useModal from 'hooks/useModal';
import { TBoard } from 'models';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import useBoardState from 'stores/boardState';
import * as S from './style';

type BoardProps = {
  board: TBoard;
};

function Board({ board }: BoardProps) {
  const { isModalOpen, closeModal, openModal } = useModal();
  const editTask = useBoardState((s) => s.editTask);

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    if (!result.destination) return;
    const taskId = result.draggableId;
    const columnId = result.source.droppableId;
    const newColumnId = result.destination.droppableId;
    const newIndex = result.destination.index;
    const column = board.columns.find((col) => col.id === columnId);
    const newColumn = board.columns.find((col) => col.id === newColumnId);
    const task = column?.tasks.find((t) => t.id === taskId);

    const newTask = task && {
      ...task,
      status: newColumn ? newColumn?.name : task.status,
    };

    if (newTask) editTask(newTask, newIndex);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Wrapper>
          {board.columns.map(({ id, name, tasks }, index) => (
            <S.ColumnWrapper key={id}>
              <S.Header index={index}>{`${name.toUpperCase()} (${
                tasks.length
              })`}</S.Header>
              <Droppable droppableId={id}>
                {(provided) => (
                  <S.TaskList
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {tasks.map((task, taskIndex) => (
                      <TaskCard key={task.id} task={task} index={taskIndex} />
                    ))}
                    {provided.placeholder}
                  </S.TaskList>
                )}
              </Droppable>
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
      </DragDropContext>
      {isModalOpen && (
        <BoardForm title="Edit Board" board={board} closeModal={closeModal} />
      )}
    </>
  );
}

export default Board;
