export const setRandomCategory = (allCategories, updateCategory) => {
    let randomIndex = Math.floor(Math.random() * Object.keys(allCategories).length)
    updateCategory((allCategories)[randomIndex])
}

