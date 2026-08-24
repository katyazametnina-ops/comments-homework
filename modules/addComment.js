import { getComments } from './api.js'
import { postComment } from './api.js'
import { setComments } from './comments.js'
import { nameInput, commentInput } from './elements.js'
import { renderComments } from './renderComments.js'
import { validateInputs } from './validateInputs.js'

export function addComment() {
    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        return
    }

    postComment(nameInput.value, commentInput.value)
        .then(() => {
            return getComments()
        })
        .then((apiComments) => {
            setComments(apiComments)
            renderComments()
            nameInput.value = ''
            commentInput.value = ''
            validateInputs()
        })
}
