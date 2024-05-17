const Planets = ({ data }) =>{
  return(
    <div>
      <h2>{data.name}</h2>
      <p>Rotation Period: {data.rotation_period}</p>
      <p>Orbital Period: {data.orbital_period}</p>
      <p>Diameter: {data.diameter}</p>
      <p>Climate: {data.climate}</p>
      <p>Gravity: {data.gravity}</p>
    </div>
  );
}

export default Planets;