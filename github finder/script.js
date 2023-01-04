const searchInput = document.getElementById("search_input");
const searchButton = document.getElementById("search_button");
const profilesContainer = document.getElementById("profiles_container");
const clearButton = document.getElementById("clear_button")
const body = document.getElementById("body")

init()
function init(){
    searchInput.addEventListener("keyup",(e)=>{
        if(e.key === "Enter"){
            getUsers()
        }
    })
    searchButton.addEventListener("click",getUsers)
    clearButton.addEventListener("click", clear)
    
}

async function getUsers(){
    const value = searchInput.value
    const streamResponse = await fetch(`https://api.github.com/search/users${value ? `?q=${value}` : ''}`);
    const textResponse = await streamResponse.text();
    const jsonResponse = JSON.parse(textResponse);
    renderUsers(jsonResponse.items)
}

function renderUsers(userData){
    let html = ``;
    for(let i=0; i<userData.length; i++){
        const profilePictureUrl = userData[i]["avatar_url"];
        const profileUrl = userData[i]["html_url"];
        const userName = userData[i]["login"];
        html += `<div class="container">
        <img src="${profilePictureUrl}" class="profile_image" alt="profile" />
        <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
            <h3 id="username">${userName}</h3>
            <a style= "color:white;" href="${profileUrl}">visit profile</a>
         </div>
         </div>`
    }
    profilesContainer.innerHTML = html;
}

function clear(){
    profilesContainer.innerHTML = ""
    searchInput.value = ""
}
