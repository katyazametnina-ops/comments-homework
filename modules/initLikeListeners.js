import { comments } from './comments.js'
import { renderComments } from './renderComments.js'

export function initLikeListeners() {
    const commentsList = document.querySelector('.comments')
    if (!commentsList) return
    commentsList.addEventListener('click', (e) => {
        const likeButton = e.target.closest('.like-button')
        if (!likeButton) return

        const index = Number(likeButton.dataset.index)
        const comment = comments[index]

        if (!comment) return

        if (comment.isLiked) {
            comment.likes--
            comment.isLiked = false
        } else {
            comment.likes++
            comment.isLiked = true
        }

        renderComments()
    })
}
