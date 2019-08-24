import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { albums } = pageContext
    return <div>
        <h1 className="title">Albums List</h1>
        {albums.map( 
            album => <p key={album.id}>
                <Link to={`/albums/${album.id}`}>{album.title}</Link>
            </p>
        )}
    </div>
}