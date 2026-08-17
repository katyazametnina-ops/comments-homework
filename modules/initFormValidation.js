import { nameInput, commentInput } from './elements.js'
import { validateInputs } from './validateInputs.js'

export function initFormValidation() {
    validateInputs()

    nameInput.addEventListener('input', validateInputs)
    commentInput.addEventListener('input', validateInputs)
}
