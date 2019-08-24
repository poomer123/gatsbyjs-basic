import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { user, relateUrl } = pageContext

    return <div>
        <h1 className="title">User</h1>
        <p>Full name : <strong>{user.name}</strong></p>
        <p>( {user.email} )</p>
        <div>
            {relateUrl.prev && <Link to={`/users/${relateUrl.prev}`}>Prev</Link>}
            <span> | </span> 
            {relateUrl.next && <Link to={`/users/${relateUrl.next}`}>Next</Link>}
        </div>
    </div>
}