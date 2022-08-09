import "./App.module.css";
import css from "./App.module.css";
import Cardlist from "../../components/cardlist";
import BattleFielder from "../battlefield";

function App() {
  return (
    <div className={css.App}>
      <BattleFielder></BattleFielder>
      {/* <Cardlist /> */}
    </div>
  );
}

export default App;
