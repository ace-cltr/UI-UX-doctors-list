import { useState, useEffect } from "react";
import "./App.css";
import DoctorCard from "./DoctorCard";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:9000/details")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
      .finally(setLoading(false));
  }, []);

  return (
    <div>
      <nav className="secondary-tab">Select Doctor</nav>
      {loading ? <p>Loading...</p> : <DoctorCard data={data} />}
    </div>
  );
}
