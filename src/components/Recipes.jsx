import React from 'react'
import curry from '../assets/images/curry.jpg'

const Recipes = () => {
  return (
    <div className="px-16 bg-gray-100">
      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
      <div className="mt-8">
        {/* cards go here */}
        <div className="bg-white rounded overflow-hidden shadow-md">
          <img src={curry} alt="curry" className="w-full h-32 sm:h-48 object-cover"/>
          <div className="m-4">
            <span className="font-bold">5 bean chili stew</span>
            <span className="block text-gray-500 text-sm">Recipe by Mario</span>
          </div>
        </div>
      </div>

      <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

      <div className="mt-8">
        {/* cards go here */}
      </div>

      <div className="flex justify-center">
        <div className="bg-secondary-100 text-secondary-200">Load more</div>
      </div>
    </div>
  )
}

export default Recipes
