import {
    nameInput,
    commentInput,
    addButton,
    commentsList,
} from './modules/elements.js'
import { validateInputs } from './modules/validateInputs.js'
import { renderComments } from './modules/renderComments.js'
import { comments } from './modules/comments.js'
import { getFormattedDate } from './modules/FormattedDate.js'

validateInputs()

nameInput.addEventListener('input', validateInputs)
commentInput.addEventListener('input', validateInputs)

addButton.addEventListener('click', function () {
    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        return
    }

    comments.push({
        name: nameInput.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
        date: getFormattedDate(),
        text: commentInput.value
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;'),
        likes: 0,
        isLiked: false,
    })

    renderComments()

    nameInput.value = ''
    commentInput.value = ''
    validateInputs()
})

commentsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('like-button')) {
        return
    }

    const commentElement = e.target.closest('.comment')
    if (!commentElement) {
        return
    }

    const index = commentElement.dataset.index
    const name = comments[index].name
    const text = comments[index].text

    commentInput.value = `* ${name}\n* ${text}\n-`

    validateInputs()
})

renderComments()
