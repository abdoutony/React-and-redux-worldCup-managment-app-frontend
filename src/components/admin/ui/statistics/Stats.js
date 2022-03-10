import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";

export const Stats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <LineChart />
        </div>
        <div className="col-md-6">
          <BarChart />
        </div>
      </div>
    </div>
  );
};
