import Heading from 'components/Heading';
import Text from 'components/Text';
import * as S from './style';
import data from './mock';

function TaskColumn() {
  const taskList = data.map(({ id, name, substasks }) => {
    const substasksLength = substasks.length;
    const completedSubstasksLength = substasks.filter(
      (task) => task.completed
    ).length;
    return (
      <S.Task key={id}>
        <Heading size="medium">{name}</Heading>
        <Text
          variant="secondary"
          as="span"
        >{`${completedSubstasksLength} of ${substasksLength} substasks`}</Text>
      </S.Task>
    );
  });

  return (
    <S.Wrapper>
      <S.Header>{`TODO (${data.length})`}</S.Header>
      <S.TaskList>{taskList}</S.TaskList>
    </S.Wrapper>
  );
}

export default TaskColumn;
