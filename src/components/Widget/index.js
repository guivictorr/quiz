import WidgetContainer from './styles';
import { title } from '../../../db.json';

const Widget = ({ children }) => {
  return (
    <WidgetContainer>
      <header>
        <h1>{title}</h1>
      </header>
      <WidgetContainer.Content>{children}</WidgetContainer.Content>
    </WidgetContainer>
  );
};

export default Widget;
