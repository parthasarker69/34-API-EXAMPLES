const searchFood = () => {
    const searchValue = document.getElementById('search-box')
    const searchText = searchValue.value;
    searchValue.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => showItems(data.meals))

}

const showItems = foods => {
    const foodsDiv = document.getElementById('foods-list')
    for (const food of foods) {
        console.log(food)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `<div class="card" onclick="mealFind(${food.idMeal})">
                <img width="100px" src="${food.strMealThumb
            }" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
                </div>
            </div>`
        foodsDiv.appendChild(div)
    }
}

const mealFind = mealId => {
    console.log(mealId);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => mealDetails(data.meals[0]))
}

const mealDetails = details => {
    console.log(details)
    const mealCard = document.getElementById('meal-details')
    mealCard.innerHTML = '';
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card mb-3 w-75 mx-auto">
  <img src="${details.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details.strMeal}</h5>
    <p class="card-text">${details.strInstructions.slice(0, 200)}</p>
    
  </div>
</div>
    `
    mealCard.appendChild(div)
}