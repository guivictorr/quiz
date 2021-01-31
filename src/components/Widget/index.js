import WidgetContainer from './styles';
import { title } from '../../../db.json';
import animations from '../../animations/index';

const Widget = ({ children }) => {
  return (
    <WidgetContainer>
      <header>
        <h1>{title}</h1>
      </header>
      <WidgetContainer.Content variants={animations.widgetAnimation}>
        {children}
      </WidgetContainer.Content>
    </WidgetContainer>
  );
};

export default Widget;
