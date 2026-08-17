import { comments } from './comments.js'
import { commentsList, commentInput } from './elements.js'
import { validateInputs } from './validateInputs.js'

export function initReplyListener() {
    commentsList.addEventListener('click', (e) => {
        if (e.target.closest('.like-button')) {
            return
        }

        const commentElement = e.target.closest('.comment')

        if (!commentElement) {
            return
        }

        const index = Number(commentElement.dataset.index)
        const comment = comments[index]

        if (!comment) {
            return
        }

        commentInput.value = `* ${comment.name}\n* ${comment.text}\n-`

        validateInputs()
    })
}
