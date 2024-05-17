const People = ({ data }) => {
    return (
      <div>
        <h2>{data.name && data.name !== 'n/a' && data.name}</h2>
        {data.height && data.height !== 'n/a' && <p>Height: {data.height} cm</p>}
        {data.mass && data.mass !== 'n/a' && <p>Mass: {data.mass} kg</p>}
        {data.hair_color && data.hair_color !== 'n/a' && <p>Hair Color: {data.hair_color}</p>}
        {data.skin_color && data.skin_color !== 'n/a' && <p>Skin Color: {data.skin_color}</p>}
        {data.eye_color && data.eye_color !== 'n/a' && <p>Eye Color: {data.eye_color}</p>}
        {data.birth_year && data.birth_year !== 'n/a' && <p>Birth Year: {data.birth_year}</p>}
        {data.gender && data.gender !== 'n/a' && <p>Gender: {data.gender}</p>}
      </div>
    );
}

export default People;

