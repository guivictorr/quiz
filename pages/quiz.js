import { useRouter } from 'next/router';

const Quiz = () => {
  const { query } = useRouter();
  return <h1>{query.name}</h1>;
};

export default Quiz;
