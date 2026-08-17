import { addButton } from './elements.js'
import { addComment } from './addComment.js'

export function initAddCommentListener() {
    addButton.addEventListener('click', addComment)
}
