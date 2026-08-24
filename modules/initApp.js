import { initFormValidation } from './initFormValidation.js'
import { initAddCommentListener } from './initAddCommentListener.js'
import { initLikeListeners } from './initLikeListeners.js'
import { initReplyListener } from './initReplyListener.js'
import { commentsList } from './elements.js'
import { loadComments } from './loadComments.js'

export function initApp() {
    initFormValidation()
    initAddCommentListener()
    initLikeListeners()
    initReplyListener()
    commentsList.innerHTML =
        '<p>Пожалуйста, подождите, загружаю комментарии...</p>'
    loadComments()
}
