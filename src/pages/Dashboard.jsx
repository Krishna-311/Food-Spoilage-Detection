import Header from "../components/Header";
import SensorCard from "../components/SensorCard";
import StatusBadge from "../components/StatusBadge";
import ManualInputForm from "../components/ManualInputForm";
import CSVUpload from "../components/CSVUpload";
import SpoilagePie from "../components/Charts/TimeSpoilageChart";
import TimeSpoilageChart from "../components/Charts/TimeSpoilageChart";
import TempHumidityChart from "../../components/Charts/TempHumidityChart";
import { GasChart } from "../components/Charts/GasChart";
export default function Dashboard() {
  return (
    <div className="p-6">

      <Header />

      {/* Sensor Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <SensorCard title="Temperature" value="22°C" />
        <SensorCard title="Humidity" value="61%" />
        <SensorCard title="Gas Level" value="340 ppm" />
      </div>

      {/* Spoilage status */}
      <div className="mt-6">
        <StatusBadge status="Fresh" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SpoilagePie />
        <TempHumidityChart />
        <GasChart />
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
        <ManualInputForm />
        <CSVUpload />
      </div>

      <div className="mt-10 p-6 bg-[var(--poison-card)] rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2 text-[var(--poison-green)]">
          Model Accuracy & Comparisons
        </h2>
        <p>Accuracy: <span className="text-[var(--poison-green)] font-bold">94.2%</span></p>
        <p>Best Model: Random Forest</p>
      </div>

    </div>
  );
}
