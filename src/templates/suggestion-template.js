const autocompleteProductSuggestion = (hit) => {

  return (
    `<div class="autocomplete-product">
      <div class="autocomplete-product__details">
        <h3 class="autocomplete-product__name">${
          hit.query
        }</h3>
      </div>
    </div>`
  )
}

export default autocompleteProductSuggestion;