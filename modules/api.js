import { getFormattedDate } from './FormattedDate.js'
import { token } from './user.js'

export function getComments() {
    return fetch(
        'https://wedev-api.sky.pro/api/v2/katya_zametnina/comments',
        {},
    )
        .then((response) => {
            if (response.status === 500) {
                throw new Error('Сервер сломался')
            }
            return response.json()
        })
        .then((data) => {
            const appComments = data.comments.map((comment) => {
                return {
                    name: comment.author.name,
                    text: comment.text,
                    date: getFormattedDate(comment.date),
                    likes: comment.likes,
                    isLiked: comment.isLiked,
                }
            })
            return appComments
        })
}

export function postComment(name, text) {
    return fetch('https://wedev-api.sky.pro/api/v2/katya_zametnina/comments', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: name, text: text }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Короткое имя')
        }
        if (response.status === 500) {
            throw new Error('Сервер сломался')
        }
        return response.json()
    })
}

export function loginUser(login, password) {
    return fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Неверный логин или пароль')
        }
        return response.json()
    })
}
