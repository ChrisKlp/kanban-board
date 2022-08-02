import TaskCard from 'components/TaskCard';
import { TTask } from 'models';
import * as S from './style';

type TaskColumnProps = {
  name: string;
  tasks: TTask[];
};

function TaskColumn({ name, tasks }: TaskColumnProps) {
  return (
    <S.Wrapper>
      <S.Header>{`${name.toLocaleUpperCase()} (${tasks.length})`}</S.Header>
      <S.TaskList>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </S.TaskList>
    </S.Wrapper>
  );
}

export default TaskColumn;
