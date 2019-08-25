import React, { useState } from 'react'
import { Link } from 'gatsby'
import 'bulma/css/bulma.min.css'
import '../i18next'
import '../style.css'
import { useTranslation } from 'react-i18next'

export default function ( { children } ) {
    const { t, i18n } = useTranslation()
    const [lang, setLang] = useState(i18n.language)

    function handleClick() {
        const changeToLang = i18n.language === 'th' ? 'en' : 'th'
        i18n.changeLanguage(changeToLang)
        setLang(changeToLang)
    }

    return <div>
        <section className="section">
            <div className="container">
            <nav>
                <Link to="/">{t('nav.home')}</Link>
                <span> | </span>
                <Link to={`/${lang}/about`}>{t('nav.about')}</Link>
                <span> | </span>
                <Link to="/articles">{t('nav.blog')}</Link>
                <span> | </span>
                <Link to="/users">{t('nav.user')}</Link>
                <span> | </span>
                <Link to="/albums">{t('nav.album')}</Link>
                <span> | </span>
                <Link to="/products">{t('nav.product')}</Link>
                <span> | </span>
                <Link to="/pages">{t('nav.pages')}</Link>
                <span> | </span>
                <Link to="/sitemap">{t('nav.sitemap')}</Link>
            </nav>
                <button onClick={handleClick} className="button is-primary">{lang}</button>
                {children}
            </div>
        </section>
    </div>
}