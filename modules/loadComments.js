import { getComments } from './api.js'
import { setComments } from './comments.js'
import { renderComments } from './renderComments.js'

export function loadComments() {
    return getComments().then((apiComments) => {
        setComments(apiComments)
        renderComments()
    })
}
