export default function DoctorCard({ data }) {
  return (
    <div className="temp-card">
      {data.map((data, i) => (
        <DoctorDetails data={data} key={i} />
      ))}
    </div>
  );
}

function DoctorDetails({ data }) {
  const { name, img, detail } = data;
  return (
    <div className="person-card">
      <img src={img} alt={name} className="person-image" />
      <div className="person-details">
        <h2>{name}</h2>
        <p>{detail}</p>
      </div>
    </div>
  );
}
