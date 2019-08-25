import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { articles } = pageContext

    return <div>
        <h1 className="">Articles</h1>
        <ol>
            {articles &&
                articles.map( article => 
                    <li key={article.slug}>
                        <Link to={`/articles/${article.slug}`}>
                            {article.frontmatter.title}
                        </Link>
                        <p>{article.frontmatter.date}</p>
                        <hr />
                    </li>
                )
            }
        </ol>
    </div>
}