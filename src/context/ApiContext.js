import { Children, useEffect, useState } from "react";
import ProvideContext from "./ProviderContext";
import axios from "axios";

const ApiContext = ({ children }) => {

    const [sun, setSun] = useState(() => JSON.parse(localStorage.getItem('sun')) || false);

    useEffect(() => {
        localStorage.setItem('sun', JSON.stringify(sun));
    }, [sun]);

    //home data
    const [productData, setProductData] = useState([])
    const productApi = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/quotes")
            setProductData(response.data.quotes)
        } catch (error) {
            error("api not matched please try again") 

        }   
    }

    // const searchHandle = productData.filter((product) =>
    //     product.author?.toLowerCase().includes(productData.toLowerCase())
    //   )


    //recipes data 
    const [recipes, setRecipes] = useState([])

    const handleRecipes = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/recipes")
            setRecipes(response.data.recipes)
        } catch {
            alert("check your Api please")
        }
    }
    // products
    const [productsData, setProductsData] = useState([])

    const handleProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProductsData(response.data)
        } catch {
            alert("check your Api please")
        }
    }

    return (
        <>
            <ProvideContext.Provider value={{
                productData,
                productApi,
                handleRecipes,
                recipes,
                handleProducts,
                productsData,
                setSun,
                sun

            }}>
                {children}
            </ProvideContext.Provider>
        </>
    )
}
export default ApiContext;