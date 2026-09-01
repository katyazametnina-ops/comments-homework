import { comments } from './comments.js'

export function initReplyListener() {
    const commentsList = document.querySelector('.comments')
    if (!commentsList) return

    commentsList.addEventListener('click', (e) => {
        if (e.target.closest('.like-button')) return

        const commentElement = e.target.closest('.comment')
        if (!commentElement) return

        const index = Number(commentElement.dataset.index)
        const comment = comments[index]

        const commentInput = document.querySelector('.add-form-text')
        if (commentInput) {
            commentInput.value = `* ${comment.name}\n* ${comment.text}\n- `
        }
    })
}
