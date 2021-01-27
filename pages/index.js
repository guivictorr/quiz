import QuizBackground from '../src/components/QuizBackground';
import { bg } from '../db.json';

const Home = () => {
  return (
    <QuizBackground backgroundImage={bg}>
      <h1>hello</h1>
    </QuizBackground>
  );
};

export default Home;
