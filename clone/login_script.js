let form=document.querySelector("form")

let email=document.getElementById("email")
let password=document.getElementById("password")

form.addEventListener("submit",function(event){
    event.preventDefault()

    let userdetails={
        email: email.value,
        password: password.value
    }

    let savedDetails=JSON.parse(localStorage.getItem("UserDetails",userdetails)) || {}

    if(userdetails.email===savedDetails.email && userdetails.password===savedDetails.password){
        localStorage.setItem("isAuth","Authenticated")
        alert("loging sucess")
        window.location.href="./dashboard.html"
    }
    else{
        alert("Wrong email or password")
    }
})