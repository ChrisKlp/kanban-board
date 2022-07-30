import TaskColumn from 'components/TaskColumn';
import { TBoard } from 'models';
import Wrapper from './style';

type BoardProps = {
  board: TBoard;
};

function Board({ board }: BoardProps) {
  return (
    <Wrapper>
      {board.columns.map(({ name, tasks }) => (
        <TaskColumn key={name} tasks={tasks} name={name} />
      ))}
    </Wrapper>
  );
}

export default Board;
