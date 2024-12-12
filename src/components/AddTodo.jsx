import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


function AddTodo() {

    const [add , setAdd]=useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault();
    }

    return (
            <form className="w-full max-w-lg bg-white shadow-md rounded px-8 py-6 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 text-center">Contact Us</h2>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                       value={add}
                       onChange={(e)=>setAdd(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                    Submit
                </button>
            </form>
    );
}
export default AddTodo