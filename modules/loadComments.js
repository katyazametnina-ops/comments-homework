import { getComments } from './api.js'
import { setComments } from './comments.js'
import { renderComments } from './renderComments.js'
import { commentsList } from './elements.js'

export function loadComments() {
    return getComments()
        .then((apiComments) => {
            setComments(apiComments)
            renderComments()
        })
        .catch((error) => {
            commentsList.innerHTML =
                '<p>Не удалось загрузить комментарии. Попробуйте обновить страницу.</p>'
            if (error.message === 'Сервер сломался') {
                alert('Сервер сломался, попробуй позже')
            } else {
                alert('Кажется, у вас сломался интернет, попробуйте позже')
            }
        })
}
