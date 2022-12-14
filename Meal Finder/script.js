const input = document.getElementById('input');
const imageContainer = document.getElementsByClassName('image_container')[0];

init();

function init(){
    input.addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            fetchMeals();
        }
    })
}

async function fetchMeals() {
    const streamResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    const textBody = await streamResponse.text();
    const jsonData = JSON.parse(textBody);
    let html = '';
    for(let i=0; i<jsonData.meals.length; i++){
        html += `<img src="${jsonData.meals[i].strMealThumb}" alt="">`
    }
   imageContainer.innerHTML = html;
}