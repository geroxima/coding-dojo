const Films = ({ data }) => {
    return (
      <div>
        <h2>{data.title}</h2>
        <p>Director: {data.director}</p>
        <p>Release Date: {data.release_date}</p>
        <p>Producer: {data.producer}</p>
        <p>Episode: {data.episode_id}</p>
        <p>Opening Crawl: {data.opening_crawl} </p>
      </div>
    );
}

export default Films;