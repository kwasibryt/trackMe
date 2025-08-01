const signin_form = document.querySelector("#signin_form");
const loginEmail= document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

// console.log(signin_form)

signin_form.addEventListener("submit", (e)=>{
    e.preventDefault();

    console.log(loginEmail.value);

    console.log(loginPassword.value)
})