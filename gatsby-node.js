const path = require('path')
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users'
const albumsUrl = 'https://jsonplaceholder.typicode.com/albums?_limit=5'

exports.createPages = async ({ actions }) => {
    const { createPage } = actions

    const usersComponent = path.resolve(__dirname, 'src', 'templates', 'users.js')
    const userComponent = path.resolve(__dirname, 'src', 'templates', 'user.js')

    const albumsComponent = path.resolve(__dirname, 'src', 'templates', 'albums.js')
    const albumComponent = path.resolve(__dirname, 'src', 'templates', 'album.js')

    const People = path.resolve(__dirname, 'src', 'templates', 'people.js')
    const Person = path.resolve(__dirname, 'src', 'templates', 'person.js')

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
        createPage({
            path: '/albums',
            component: albumsComponent,
            context: {
                albums: data
            }
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
}