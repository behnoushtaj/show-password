let inputpass=document.querySelector(".inputpass")
let openEyeIcon=document.querySelector(".open")
openEyeIcon.addEventListener("click" , function(){
    if(inputpass.type==="password"){
        inputpass.type="text"
        openEyeIcon.className="fa-solid fa-eye"
    }else{
        inputpass.type="password"
        openEyeIcon.className="fa-solid fa-eye-slash open"
    }
})
