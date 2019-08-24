import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { albums, pagination } = pageContext

    const getPagination = () => {
        const pageClass = 'pagination-link'
        const pageClassActive = 'pagination-link is-current'
        const paginationList = new Array(pagination.pageTotal).fill()

        return (
            <nav className="pagination">
                <ul className="pagination-list">
                    {paginationList.map( (page, index) => 
                        <li key={index}>
                            <Link 
                                className={ index + 1 === pagination.pageCurrent ? pageClassActive : pageClass } 
                                to={`/albums/page/${index+1}`}
                            >
                                {index+1}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
    return <div>
        <h1 className="title">Albums List</h1>
        {albums.map( 
            album => <p key={album.id}>
                <span>{album.id}. </span>
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
            </p>
        )}
        {pagination && getPagination()}

    </div>
}