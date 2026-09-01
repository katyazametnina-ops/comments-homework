import { container } from './elements.js'
import { loginUser } from './api.js'
import { setUser } from './user.js'
import { loadComments } from './loadComments.js'

export function renderLogin() {
    container.innerHTML = `
    <div class="add-form">
        <input type="text" id="login-input" placeholder="Логин">
        <input type="password" id="password-input" placeholder="Пароль">
        <button id="login-button">Войти</button>
    </div>
    `
    const loginInput = container.querySelector('#login-input')
    const passwordInput = container.querySelector('#password-input')
    const loginButton = container.querySelector('#login-button')

    loginButton.addEventListener('click', () => {
        loginUser(loginInput.value, passwordInput.value)
            .then((responseData) => {
                setUser(responseData.user.token, responseData.user.name)
                loadComments()
            })
            .catch((error) => {
                alert(error.message)
            })
    })
}
