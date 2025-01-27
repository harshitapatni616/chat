let prompt=document.querySelector("#prompt")
let chatContainer=document.querySelector(".chat-container")

function createchatbox(html,classes){
    let div=document.createElement("div")
    div.innerHTML=html
    div.classList.add(classes)
    return div
}


function handlechatResponse(message){
    let html=`<img src="user.jpg" alt="" id="userimage" width="50">
<div class="user-chatarea">
${message}
</div>`
let userchatbox=createchatbox(html,"user-chatbox")
chatContainer.appendChild(userchatbox)

}


prompt.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        handlechatResponse(prompt.value)
    }
    

})