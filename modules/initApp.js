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
    renderComments()
}
