'use-client'
import Image from 'next/image';
import React, { useState } from 'react';

const MealsComp = () => {
    const [search, setSearch] = useState('a')
    const [error, setError] = useState('')
    const [meals, setMeals] = useState([])
    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data =await res.json()
            setMeals(data.meals)
            setError('')
        } catch (error){
            setError('No Data Found')
        }
    }
    const handler = e => {
        setSearch(e.target.value)
    }
    // useEffect(() => {
    //     loadData()
    // }, [search])
    return (
        <div>
            <input onChange={handler} className='p-2 border border-gray-600' type="text" name="meal" placeholder='Choose Your Meal....' id="" />
            <button onClick={() => loadData()} className='bg-red-400 p-2 border border-gray-600 text-white'>Search</button>
            <div className='grid grid-cols-3 gap-5 my-4'>
                { meals?.length>0 && !error &&
                    meals?.map(meal => <div key={meal.idMeal} className='border-2 p-4 border-gray-500 rounded-lg'>
                        <Image width={400} height={300} src={meal.strMealThumb} alt='Meal Image'/>
                        <h3>{meal.strMeal}</h3>
                        <h3>{meal.strCategory}</h3>
                    </div>)
                }
                {
                    error && <h1>No Data Found</h1>
                }
            </div>
        </div>
    );
};

export default MealsComp;