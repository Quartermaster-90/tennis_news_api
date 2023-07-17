
const FavouriteArticles = ({ articles, onArticleSelected }) => {

    const favouriteArticles = articles.filter(article => article.isFavourite)
  
    return (
      <>
        <h3>Favourite Stories:</h3>
        <ul>
          {favouriteArticles.map(article => {
            return (
              <li key={article.id}>
                <button onClick={() => onArticleSelected(article.id)}>{article.webTitle}</button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
  
  export default FavouriteArticles