import React, { useContext, useEffect } from 'react'
import ProvideContext from '../context/ProviderContext'

function Recipes() {

  const { handleRecipes, sun,recipes } = useContext(ProvideContext)
 


  useEffect(() => {
    handleRecipes()
  }, [])

  return (
    <div className={`  p-4 shadow-lg ${sun ? "bg-black text-white " :"bg-white "}`} >
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes?.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-transparent flex border shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
        >
          <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-48 "
          /></div>
          <div className="p-4">
            <h2 className="text-xl font-bold  mb-2 truncate">
              {recipe.name}
            </h2>
            <p className="text-sm  mb-1">
              <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
            </p>
            <p className="text-sm  mb-1">
              <span className="font-semibold">Cook Time:</span> {recipe.cookTimeMinutes} minutes
            </p>
            <p className="text-sm  mb-1">
              <span className="font-semibold">Calories:</span> {recipe.caloriesPerServing}
            </p>
            <p className="text-sm ">
              <span className="font-semibold">Difficulty:</span> {recipe.difficulty}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Recipes