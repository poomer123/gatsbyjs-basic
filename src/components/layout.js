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
                <span> | </span>
                <Link to="/products">สินค้า</Link>
                <span> | </span>
                <Link to="/pages">หน้าทั้งหมด</Link>
                <span> | </span>
                <Link to="/sitemap">ฝังเว็บไซต์</Link>
                {children}
            </div>
        </section>
    </div>
}