import { comments } from './comments.js'
import { container } from './elements.js'
import { sanitize } from './sanitize.js'
import { token, name } from './user.js'
import { renderLogin } from './renderLogin.js'
import { addComment } from './addComment.js'
import { initLikeListeners } from './initLikeListeners.js'
import { initReplyListener } from './initReplyListener.js'

export function renderComments() {
    const commentsHtml = comments
        .map((comment, index) => {
            return `
            <li class="comment" data-index="${index}">
              <div class="comment-header">
                <div>${sanitize(comment.name)}</div>
                <div>${comment.date}</div>
              </div>
              <div class="comment-body">
                <div class="comment-text">
                  ${sanitize(comment.text)}
                </div>
              </div>
              <div class="comment-footer">
                <div class="likes">
                  <span class="likes-counter">${comment.likes}</span>
                  <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
                </div>
              </div>
            </li>
          `
        })
        .join('')

    let formHtml = ''
    if (token) {
        formHtml = `
            <div class="add-loader" style="display: none;">Комментарий добавляется...</div>
            <div class="add-form">
                <input type="text" class="add-form-name" value="${name}" readonly />
                <textarea type="textarea" class="add-form-text" placeholder="Введите ваш комментарий" rows="4"></textarea>
                <div class="add-form-row">
                    <button class="add-form-button">Написать</button>
                </div>
            </div>
        `
    } else {
        formHtml = `
            <p>Чтобы добавить комментарий, <a href="#" id="go-to-login">авторизуйтесь</a></p>
        `
    }

    container.innerHTML = `
        <ul class="comments">
            ${commentsHtml}
        </ul>
        ${formHtml}
    `

    initLikeListeners()
    initReplyListener()

    if (token) {
        const buttonElement = document.querySelector('.add-form-button')
        buttonElement.addEventListener('click', addComment)
    } else {
        const loginLink = document.getElementById('go-to-login')
        loginLink.addEventListener('click', (event) => {
            event.preventDefault()
            renderLogin()
        })
    }
}
