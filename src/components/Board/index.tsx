import TaskColumn from 'components/TaskColumn';
import { TBoard } from 'models';
import Wrapper from './style';

type BoardProps = {
  board: TBoard;
};

function Board({ board }: BoardProps) {
  return (
    <Wrapper>
      {board.columns.map(({ id, name, tasks }) => (
        <TaskColumn key={id} tasks={tasks} name={name} />
      ))}
    </Wrapper>
  );
}

export default Board;
