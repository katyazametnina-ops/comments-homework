import { comments } from './comments.js'
import { renderComments } from './renderComments.js'

export function initLikeListeners() {
    const likeButtons = document.querySelectorAll('.like-button')

    likeButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation()
            const index = button.dataset.index
            const comment = comments[index]

            if (comment.isLiked) {
                comment.likes--
                comment.isLiked = false
            } else {
                comment.likes++
                comment.isLiked = true
            }

            renderComments()
        })
    })
}
