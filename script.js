const regex=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailBox=document.querySelector("input[name='email']");
const form=document.querySelector("form");
const error_msg=document.querySelector(".error_msg")

form.addEventListener("submit",onSubmit);
function onSubmit(evt){
    evt.preventDefault();
    const email=evt.target.email.value;
    if(!email.match(regex)){
        error_msg.classList.add("active");
        emailBox.classList.add("error");
    }else{
        alert("We will contact you soon !");
    }
}
emailBox.addEventListener("input",function(evt){
    if(error_msg.classList.contains("active")){
        error_msg.classList.remove("active");
        emailBox.classList.remove("error");
    }
});