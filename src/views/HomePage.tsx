import { Counter } from '@features/counter/Counter';

export const HomePage: React.FC = () => {
  return (
    <main>
      <h1>Coin Market Cap</h1>
      <Counter />
    </main>
  );
};
