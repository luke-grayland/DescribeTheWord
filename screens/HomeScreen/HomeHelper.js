import Config from "../../config/config";

export const fetchCategories = (ipAddress, port, setAllCategories) => {
    fetch(`${ipAddress}:${port}/categories`)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(response => {
            let categories = []

            for (let i = 0; i < Object.keys(response.data).length; i++)
                categories[i] = response.data[i]

            setAllCategories(categories)
        })
        .catch(error => {
            console.error("Error fetching categories data: ", error)
        })
}