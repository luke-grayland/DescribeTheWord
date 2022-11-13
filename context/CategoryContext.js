import React, {createContext, useContext, useState} from 'react'

const CategoryContext = createContext()
const SetCategoryContext = createContext()
const AllCategoriesContext = createContext()
const SetAllCategoriesContext = createContext()

export function useCategory() {
    return useContext(CategoryContext)
}

export function useSetCategory() {
    return useContext(SetCategoryContext)
}

export function useAllCategories() {
    return useContext(AllCategoriesContext)
}

export function useSetAllCategories() {
    return useContext(SetAllCategoriesContext)
}

export function CategoryProvider({ children }) {

    const [category, setCategory] = useState("Loading...")
    const [allCategories, setAllCategories] = useState()

    function updateCategory(category) {
        setCategory(category)
    }

    function loadAllCategories(allCategories) {
        setAllCategories(allCategories)
    }

    return (
        <CategoryContext.Provider value={category}>
            <SetCategoryContext.Provider value={updateCategory}>
                <AllCategoriesContext.Provider value={allCategories}>
                    <SetAllCategoriesContext.Provider value={loadAllCategories}>
                        {children}
                    </SetAllCategoriesContext.Provider>
                </AllCategoriesContext.Provider>
            </SetCategoryContext.Provider>
        </CategoryContext.Provider>
    )
}