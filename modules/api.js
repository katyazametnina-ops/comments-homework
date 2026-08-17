import { getFormattedDate } from './FormattedDate.js'

export function getComments() {
    return fetch(
        'https://wedev-api.sky.pro/api/v1/katya_zametnina/comments',
        {},
    )
        .then((response) => response.json())
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
    return fetch('https://wedev-api.sky.pro/api/v1/katya_zametnina/comments', {
        method: 'POST',

        body: JSON.stringify({
            name: name,
            text: text,
        }),
    }).then((response) => response.json())
}
