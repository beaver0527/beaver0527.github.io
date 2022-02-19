const loginInput = document.querySelector("#login-form input");
const loginForm= document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
function onLoginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    PaintGreeting(username);
}
// `백틱 조심, 중괄호 $ addevnetlistenr 실행시 event의 argument를 받을 수 있음 (event) preventDefault 로 브라우저 자동 기능 제한
function PaintGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);


if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginBtnSubmit);
    
} else{
    PaintGreeting(saveUsername);
}