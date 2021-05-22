/* eslint-disable no-unused-vars */
import "./App.css";
import ExpandCard from "./Components/ExpandCard";
import Image from "./Components/Images/Images";

function App(props) {
  return (
    <div>
      <div className="container">
        <ExpandCard
          Image={Image.flowers}
          title="Flowers all Day"
          class={"panel"}
        />
        <ExpandCard
          Image={Image.lake}
          title={"Miiror of Lake"}
          class={"panel"}
        />
        <ExpandCard
          Image={Image.motherTree}
          title={"Mother Nature"}
          class={"panel"}
        />
        <ExpandCard
          Image={Image.waterfall}
          title={"The falls of Bride"}
          class={"panel"}
        />
        <ExpandCard
          Image={Image.mountainFall}
          title={"Mountain Falls"}
          class={"panel"}
        />
      </div>
    </div>
  );
}

export default App;
