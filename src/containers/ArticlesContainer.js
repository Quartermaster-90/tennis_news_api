import { useState, useEffect } from 'react'
import ArticleSelector from '../components/ArticleSelector'
import Article from '../components/Article'
import FavouriteArticles from '../components/FavouriteArticles'

const ArticlesContainer = () => {

    const [articles, setArticles] = useState([])
    const [selectedArticleID, setSelectedArticleID] = useState('')

    useEffect(() => {
        getArticles()
      }, [])

    const getArticles = () => {
      fetch("https://content.guardianapis.com/search?q=tennis&format=json&api-key=test")
        .then(res => res.json())
        .then(articlesData => setArticles(articlesData))
      }

    const handleArticleSelected = id => {
        setSelectedArticleID(id)
      }

    const handleFavouriteToggle = (id) => {
      const updatedArticles = articles.map((article) => {
        return article.id === id 
          ? {...article, isFavourite: !article.isFavourite}
          : article
      })
      setArticles(updatedArticles)
    }

    const selectedArticle = articles.find(article => article.id === selectedArticleID)

  return (
    <>
      <h2>Tennis Articles</h2>
      <ArticleSelector articles={articles} onArticleSelected={handleArticleSelected} />
      <Article article={selectedArticle} onFavouriteToggle={handleFavouriteToggle} />
      <FavouriteArticles articles={articles} onArticleSelected={handleArticleSelected} />
    </>
  )
}
export default ArticlesContainer