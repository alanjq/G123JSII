export const ingredientList = (allIngredients) => allIngredients.map((ingredient) => `
    <li class="recipe__ingredient">
        <svg class="recipe__icon">
            <use href="src/img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${ingredient.quantity || ''}</div>
        <div class="recipe__description">
            <span class="recipe__unit">${ingredient.unit}</span>
            ${ingredient.description}
        </div>
    </li>`).join('')
