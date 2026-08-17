import { setComments } from './comments.js'
import { getComments } from './api.js'
import { renderComments } from './renderComments.js'
import { initFormValidation } from './initFormValidation.js'
import { initAddCommentListener } from './initAddCommentListener.js'
import { initLikeListeners } from './initLikeListeners.js'
import { initReplyListener } from './initReplyListener.js'

export function initApp() {
    initFormValidation()
    initAddCommentListener()
    initLikeListeners()
    initReplyListener()
    // renderComments()
    getComments().then((apiComments) => {
        setComments(apiComments)
        renderComments()
    })
}
