import React, {createContext, useContext, useState} from 'react'

const CategoryContext = createContext()
const SetCategoryContext = createContext()

export function useCategory() {
    return useContext(CategoryContext)
}

export function useSetCategory() {
    return useContext(SetCategoryContext)
}

export function CategoryProvider({ children }) {

    const [category, setCategory] = useState("toast category")

    function updateCategory(category) {
        setCategory(category)
    }

    return (
        <CategoryContext.Provider value={category}>
            <SetCategoryContext.Provider value={updateCategory}>
                {children}
            </SetCategoryContext.Provider>
        </CategoryContext.Provider>
    )
}