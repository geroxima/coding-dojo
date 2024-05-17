const Species = ({ data }) => {
    return (
      <div>
        <h2>{data.name}</h2>
        <p>Classification: {data.classification}</p>
        <p>Designation: {data.designation}</p>
        <p>Average Height: {data.average_height} cm</p>
        <p>Language: {data.language} </p>
      </div>
    );
  }

export default Species;