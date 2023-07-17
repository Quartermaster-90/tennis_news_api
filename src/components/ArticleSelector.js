
const ArticleSelector = ({ articles, onArticleSelected }) => {

    const handleChange = event => {
        onArticleSelected(event.target.value)
    }

  return (
    <select defaultValue="" onChange = { handleChange } >
        <option value = "" disabled > Select Section </option> {
            articles.map(article => {
                return ( <
                    option key = { article.sectionId }
                    value = { article.sectionId } > { article.sectionName } </option>
                )
            })
        }
    </select>
  )
}

export default ArticleSelector