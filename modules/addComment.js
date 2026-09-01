import { postComment } from './api.js'
import { nameInput, commentInput, addForm, addLoader } from './elements.js'
import { validateInputs } from './validateInputs.js'
import { loadComments } from './loadComments.js'

export function addComment() {
    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        return
    }
    addForm.style.display = 'none'
    addLoader.style.display = 'block'
    postComment(nameInput.value, commentInput.value)
        .then(() => {
            return loadComments()
        })
        .then((apiComments) => {
            addForm.style.display = ''
            addLoader.style.display = 'none'
            nameInput.value = ''
            commentInput.value = ''
            validateInputs()
        })
        .catch((error) => {
            addForm.style.display = ''
            addLoader.style.display = 'none'
            if (error.message === 'Короткое имя') {
                alert('Имя и комментарий должны быть не короче 3 символов')
            } else if (error.message === 'Сервер сломался') {
                alert('Сервер сломался, попробуй позже')
            } else {
                alert('Кажется, у вас сломался интернет, попробуйте позже')
            }
        })
}
