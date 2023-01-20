import * as SplashScreen from "expo-splash-screen";
export const fetchCategories = (setAllCategories, token) => {
    fetch('https://us-central1-describetheword-808.cloudfunctions.net/app/categories', {
        headers: {authorization: token}
    })
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
            SplashScreen.hideAsync()
        })
        .catch(error => {
            console.error("Error fetching categories data: ", error)
        })
}

