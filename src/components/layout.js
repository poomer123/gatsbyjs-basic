import React from 'react'
import { Link } from 'gatsby'
import 'bulma/css/bulma.min.css'
import '../style.css'

export default function ( { children } ) {
    return <div>
        <section className="section">
            <div className="container">
                <Link to="/">หน้าแรก</Link>
                <span> | </span>
                <Link to="/about">เกี่ยวกับ</Link>
                <span> | </span>
                <Link to="/users">ผู้ใช้</Link>
                <span> | </span>
                <Link to="/albums">อัลบัม</Link>
                {children}
            </div>
        </section>
    </div>
}