import Header from "../components/Header";
import SensorCard from "../components/SensorCard";
import StatusBadge from "../components/StatusBadge";
import ManualInputForm from "../components/ManualInputForm";
import CSVUpload from "../components/CSVUpload";
import SpoilagePie from "../components/Charts/TimeSpoilageChart";
import TempHumidityChart from "../components/Charts/TempHumidityChart";
import { GasChart } from "../components/Charts/GasChart";

export default function Dashboard() {
  return (
    <div className="dashboard-container">

      <style>{`
        .dashboard-container {
          padding: 24px;
          background-color: #f7fff7; /* light green background */
          color: #333;
          font-family: Arial, sans-serif;
        }

        /* Sensor Grid */
        .sensor-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 24px;
        }

        @media (min-width: 768px) {
          .sensor-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Status Section */
        .status-section {
          margin-top: 24px;
        }

        /* Charts Grid */
        .charts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 24px;
        }

        @media (min-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 1024px) {
          .charts-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Forms Grid */
        .forms-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 40px;
        }

        @media (min-width: 1024px) {
          .forms-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Accuracy Card */
        .accuracy-card {
          margin-top: 32px;
          padding: 24px;
          background-color: #e0f7e0; /* light green card */
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .accuracy-card h2 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #2a7f2a; /* dark green heading */
        }

        .accuracy-card span {
          color: #2a7f2a;
          font-weight: bold;
        }

        /* Mobile adjustments */
        @media (max-width: 480px) {
          .dashboard-container {
            padding: 16px;
          }

          .charts-grid, .forms-grid {
            gap: 16px;
          }

          .accuracy-card {
            padding: 16px;
          }
        }
      `}</style>

      <Header />

      {/* Sensor Values */}
      <div className="sensor-grid">
        <SensorCard title="Temperature" value="22°C" />
        <SensorCard title="Humidity" value="61%" />
        <SensorCard title="Gas Level" value="340 ppm" />
      </div>

      {/* Spoilage status */}
      <div className="status-section">
        <StatusBadge status="Fresh" />
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <SpoilagePie />
        <TempHumidityChart />
        <GasChart />
      </div>

      {/* Forms */}
      <div className="forms-grid">
        <ManualInputForm />
        <CSVUpload />
      </div>

      {/* Accuracy card */}
      <div className="accuracy-card">
        <h2>Model Accuracy & Comparisons</h2>
        <p>
          Accuracy: <span>94.2%</span>
        </p>
      </div>

    </div>
  );
}
