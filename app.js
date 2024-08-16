import {auth,signInWithEmailAndPassword } from "../../firebase.js"

let signin = ()=>{
    const email =document.getElementById("email");
    const password =document.getElementById("password");
    signInWithEmailAndPassword(auth, email, password)
  .then((res) => {
    console.log(res.user);

  })
  .catch((error) => {
  console.log(user)
  });
}

const submit_btn= document.getElementById("submit-btn");
submit_btn.addEventListener("click",signin)