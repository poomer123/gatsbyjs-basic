module.exports = {
    siteMetadata: {
        title: 'Poom Test',
        titleTemplate: '%s - The Real Hero',
        description: '...',
        url: 'https://poom-test.com',
        image: '/gatsby.png'
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/markdowns`,
            }
        },
        'gatsby-transformer-remark',
        'gatsby-plugin-i18n'
    ]
}