function Vehicles({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Model: {data.model}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Cost in Credits: {data.cost_in_credits}</p>
      <p>Length: {data.length} m</p>
      <p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
      <p>Crew: {data.crew}</p>
      <p>Passengers: {data.passengers}</p>
      <p>Cargo Capacity: {data.cargo_capacity}</p>
      <p>Consumables: {data.consumables}</p>
    </div>
  );
}

export default Vehicles;