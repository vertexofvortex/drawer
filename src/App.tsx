import s from "./App.module.scss";
import { Board, Tabs } from "./components";

function App() {
  return (
    <main className={s.main}>
      <Tabs />
      <Board />
    </main>
  );
}

export default App;
