import WidgetContainer from './styles';
import { title } from '../../../db.json';

const Widget = ({ children }) => {
  return (
    <>
      <WidgetContainer.Header>
        <h1>{title}</h1>
      </WidgetContainer.Header>
      <WidgetContainer>{children}</WidgetContainer>
    </>
  );
};

export default Widget;
