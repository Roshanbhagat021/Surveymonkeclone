
let form=document.querySelector("form")

let email=document.getElementById("email")
let password=document.getElementById("password")

form.addEventListener("submit",function(event){
    // event.preventDefault()

    let userdetails={
        email: email.value,
        password: password.value
    }

    localStorage.setItem("UserDetails",JSON.stringify(userdetails));
    alert("Email and password saved")
    

})