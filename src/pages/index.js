import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

export default function() {
    const { t } = useTranslation()

    return <div>
        <h1 className="title">Home</h1>
        <p>
            <Link to="/">{t('home')}</Link>
        </p>
    </div>
}