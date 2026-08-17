import { comments } from './comments.js'
import { nameInput, commentInput } from './elements.js'
import { getFormattedDate } from './FormattedDate.js'
import { renderComments } from './renderComments.js'
import { validateInputs } from './validateInputs.js'

export function addComment() {
    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        return
    }

    comments.push({
        name: nameInput.value,
        date: getFormattedDate(),
        text: commentInput.value,
        likes: 0,
        isLiked: false,
    })

    renderComments()

    nameInput.value = ''
    commentInput.value = ''

    validateInputs()
}
