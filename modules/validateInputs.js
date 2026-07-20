import { nameInput, addButton, commentInput } from './elements.js'

export function validateInputs() {
    if (nameInput.value.trim() === '' || commentInput.value.trim() === '') {
        addButton.disabled = true
    } else {
        addButton.disabled = false
    }
}
