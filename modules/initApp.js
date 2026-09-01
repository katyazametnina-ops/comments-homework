import { container } from './elements.js'
import { loadComments } from './loadComments.js'

export function initApp() {
    container.innerHTML =
        '<p>Пожалуйста, подождите, загружаю комментарии...</p>'
    loadComments()
}
