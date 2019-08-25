const path = require('path')
const axios = require('axios')
const _ = require('lodash')
const contentful = require('contentful')
const { extractFileName } = require('./src/helper')

const url = 'https://jsonplaceholder.typicode.com/users'
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums?_limit=50'

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const pagesComponent = path.resolve(__dirname, 'src', 'templates', 'pages.js')

    const productsComponent = path.resolve(__dirname, 'src', 'templates', 'products.js')

    const usersComponent = path.resolve(__dirname, 'src', 'templates', 'users.js')
    const userComponent = path.resolve(__dirname, 'src', 'templates', 'user.js')

    const albumsComponent = path.resolve(__dirname, 'src', 'templates', 'albums.js')
    const albumComponent = path.resolve(__dirname, 'src', 'templates', 'album.js')

    const People = path.resolve(__dirname, 'src', 'templates', 'people.js')
    const Person = path.resolve(__dirname, 'src', 'templates', 'person.js')

    const articlesComponent = path.resolve(__dirname, 'src', 'templates', 'articles.js')
    const articleComponent = path.resolve(__dirname, 'src', 'templates', 'article.js')

    try {
        const client = contentful.createClient({
            accessToken: process.env.ACCESS_TOKEN,
            space: process.env.SPACE_ID
        })
        const { items } = await client.getEntries('product')
        const products = items.map(product => product.fields)
        
        createPage({
            path: '/products',
            component: productsComponent,
            context: {
                products: products
            }
        })

    } catch (error) {
        return Promise.reject(error)
    }


    try {
        const usersList = await axios.get(url)

        createPage({
            path: '/users',
            component: usersComponent,
            context: {
                usersList: usersList.data
            }
        })

        usersList.data.forEach( (user, index) => {
            createPage({
                path: `/users/${user.username.toLowerCase()}`,
                component: userComponent,
                context: {
                    user: user,
                    relateUrl: {
                        prev: index !== 0 ? usersList.data[index-1].username.toLowerCase() : null,
                        next: index !== usersList.data.length - 1
                        ? usersList.data[index+1].username.toLowerCase()
                        : null
                    }
                }
            })
        })

    } catch (error) {
        return Promise.reject(error)
    }

    try {
        const { data } = await axios.get(albumsUrl)
        const dataInPage = _.chunk(data, 10)

        createPage({
            path: '/albums',
            component: albumsComponent,
            context: {
                albums: dataInPage[0],
                pagination: {
                    pageTotal: dataInPage.length,
                    pageCurrent: 1
                }
            }
        })

        dataInPage.forEach( (page, index) => {
            createPage({
                path: `/albums/page/${index + 1}`,
                component: albumsComponent,
                context: {
                    albums: dataInPage[index],
                    pagination: {
                        pageTotal: dataInPage.length,
                        pageCurrent: index + 1
                    }
                }
            })
        })


        data.forEach( album => {
            createPage({
                path: `/albums/${album.id}`,
                component: albumComponent,
                context: {
                    album: album
                }
            })
        })

    } catch (error) {
        return Promise.reject(error)
    }


    const peopleList = ['John', 'Jack', 'Mike']

    createPage({
        path: '/people',
        component: People,
        context: {
            peopleList: peopleList
        }
    })
    
    peopleList.forEach( people => {
        createPage({
            path: `/${people.toLowerCase()}`,
            component: Person,
            context: {
                name: people
            }
        })
    })

    try {
        const query = `
            query {
                allSitePage {
                    edges {
                        node {
                            id
                            path
                        }
                    }
                }
            }
        `
        const { data, errors } = await graphql(query)
        const pages = data.allSitePage.edges.map(({ node }) => node)
        if (errors) {
            return Promise.reject(errors)
        }
        createPage({
            path: '/pages',
            component: pagesComponent,
            context: {
                pages: pages
            }
        })
    } catch(errors) {
        return Promise.reject(errors)
    }

    try {
        const query = `
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            fileAbsolutePath
                            html
                            frontmatter {
                                date
                                title
                            }
                            headings {
                                value
                            }
                        }
                    }
                }
            }
        `
        const { data, errors } = await graphql(query)

        if (errors) {
            return Promise.reject(errors)
        }
        const { edges } = data.allMarkdownRemark
        const articles = edges.map( ({ node }) => {

            const { fileAbsolutePath } = node
            const articlePath = extractFileName(fileAbsolutePath)

            return {
                ...node,
                slug: articlePath
            }
        })

        createPage({
            path: '/articles',
            component: articlesComponent,
            context: {
                articles: articles
            }
        })

        articles.forEach( article => {
            createPage({
                path: `/articles/${article.slug}`,
                component: articleComponent,
                context: {
                    filePath: article.fileAbsolutePath
                }
            })
        })

    } catch (errors) {
        return Promise.reject(errors)
    }
}