import { useState } from 'react'

const Article = ({ article, onFavouriteToggle }) => {

    const [index, setIndex] = useState(0);

    if (!article) {
      return null
    }
      
    function handleNextClick() {
      setIndex(index + 1);
    }
      
    const articleList = articleList[index];
  
    const handleClick = () => {
      onFavouriteToggle(article.id)
    }
  
    const favouriteBtnText = article.isFavourite ? 'Remove from favourites' : 'Add to favourites'
  
    return (
      <>
        <a href={article.apiUrl}><h3>{article.webTitle}</h3></a>
        <h4><i>{article.sectionName}</i></h4>
        <button onClick={handleClick}>{favouriteBtnText}</button>
        <button onClick={handleNextClick}>
          Next
        </button>
        <h3>  
          ({index + 1} of {articleList.length})
        </h3>
      </>
    )
  }
  
  export default Article