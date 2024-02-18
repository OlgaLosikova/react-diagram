import { Chart } from "react-google-charts";
import "./App.css";
import { data } from "./data";
function App() {
  const options = {
    title: "My Daily Activities",
  };
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    </div>
  );
}

export default App;
