import React from 'react'
import { Link } from 'gatsby'

export default function ({ pageContext }) {
    const { usersList } = pageContext
    return <div>
        <h1 className="title">User List</h1>
        {usersList.map( 
            user => <p key={user.id}>
                <Link to={`/users/${user.username.toLowerCase()}`}>{user.name}</Link>
            </p>
        )}
    </div>
}