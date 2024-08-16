import { auth,createUserWithEmailAndPassword} from "../../firebase.js";

// const form=document.getElementById("form");
// form.addEventListener("submit",form);
// form.preventdefualt();

let signup=()=>{
  const email =document.getElementById("email");
    const password =document.getElementById("password");
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((res) => {
   console.log(res.user)
  })
  .catch((error) => {
    
    console.log("error", error);
  });

}

const sign_upbtn=document.getElementById("submit_btn");
sign_upbtn.addEventListener("click", signup );