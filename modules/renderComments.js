import { comments } from './comments.js'
import { commentsList } from './elements.js'
import { sanitize } from './sanitize.js'

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
                  <button 
                    class="like-button ${comment.isLiked ? '-active-like' : ''}" 
                    data-index="${index}">
                  </button>
                </div>
              </div>
            </li>
          `
        })
        .join('')

    commentsList.innerHTML = commentsHtml
}
