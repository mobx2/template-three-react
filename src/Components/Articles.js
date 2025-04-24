import articles from "../data/articles";

function Articles() {
  return (
    <div className="articles" id="articles">
      <h2 className="main-title">articles</h2>
      <div className="container">
        {articles.map((article) => (
          <div className="box">
            <img src={article.img} alt={article.name} />
            <div className="content">
              <h3>{article.name}</h3>
              <p>{article.article}</p>
            </div>
            <div className="info">
              <a href="#">read more</a>
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles();
