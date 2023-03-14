// showing data of user from localstorage

let data = localStorage.getItem("userInfos")
let parsedData = JSON.parse(data)


let tableId = document.getElementById("tableBody")
tableId.innerHTML += `<tr>
                    <td>${parsedData.emailAddress}</td>
                    <td>${parsedData.passwordValue}</td>
                    <td>${parsedData.addressValue}</td>
                    <td>${parsedData.states}</td>
                    </tr>
                    
                        `

let backBtn = document.getElementById("backBtn")

// Additional Back Button
backBtn.addEventListener("click", function(){
    window.location.href = '/Index.html'
})