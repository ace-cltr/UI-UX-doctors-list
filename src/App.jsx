import { useState, useEffect } from "react";
import "./App.css";
import DoctorCard from "./DoctorCard";

const details = [
  {
    name: "Dr. Name",
    img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    detail: "lorem ipsum",
  },
  {
    name: "Dr. Name",
    img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    detail: "lorem ipsum",
  },
  {
    name: "Dr. Name",
    img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    detail: "lorem ipsum",
  },
  {
    name: "Dr. Name",
    img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    detail: "lorem ipsum",
  },
  {
    name: "Dr. Name",
    img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    detail: "lorem ipsum",
  },
  {
    name: "Dr. Name",
    img: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
    detail: "lorem ipsum",
  },
];

export default function App() {
  const [data, setData] = useState(details);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:9000/details")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.error(err))
  //     .finally(setLoading(false));
  // }, []);

  return (
    <div>
      <nav className="secondary-tab">Select Doctor</nav>
      <DoctorCard data={data} />
      {/* {loading ? <p>Loading...</p> : <DoctorCard data={data} />} */}
    </div>
  );
}
