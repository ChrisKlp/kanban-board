import Heading from 'components/Heading';
import Text from 'components/Text';
import { TTask } from 'models';
import * as S from './style';

type TaskColumnProps = {
  name: string;
  tasks: TTask[];
};

function TaskColumn({ name, tasks }: TaskColumnProps) {
  const taskList = tasks.map(({ id, title, subtasks }) => {
    const subtasksLength = subtasks.length;
    const completedSubtasksLength = subtasks.filter(
      (subtask) => subtask.isCompleted
    ).length;
    return (
      <S.Task key={id}>
        <Heading size="medium">{title}</Heading>
        <Text
          variant="secondary"
          as="span"
        >{`${completedSubtasksLength} of ${subtasksLength} subtasks`}</Text>
      </S.Task>
    );
  });

  return (
    <S.Wrapper>
      <S.Header>{`${name.toLocaleUpperCase()} (${tasks.length})`}</S.Header>
      <S.TaskList>{taskList}</S.TaskList>
    </S.Wrapper>
  );
}

export default TaskColumn;
