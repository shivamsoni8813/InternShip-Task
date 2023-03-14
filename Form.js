// Selecting Id Of input fieds

let email = document.getElementById("inputEmail4")
let password = document.getElementById("inputPassword4")
let address = document.getElementById("inputAddress")
let selectedState = document.getElementById("inputState")
let checkBox = document.getElementById("gridCheck")
let submitBtn = document.getElementById("submitBtn")

let formId = document.getElementById("myForm")

formId.addEventListener("submit", function(e){
        e.preventDefault()
})

submitBtn.addEventListener("click", function(e){
    e.preventDefault()
    let userDetail = {
        emailAddress : email.value,
        passwordValue : password.value,
        addressValue : address.value,
        states : selectedState.value,
    }
    let userStringiFy = JSON.stringify(userDetail)
    localStorage.setItem("userInfos", userStringiFy)

    alert("Your Form is Submitted")
    window.location.reload()
    window.location.href = "/Index.html"
})