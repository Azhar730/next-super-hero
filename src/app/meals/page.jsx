'use client'
import MealsComp from "../Components/MealsComp";



const metadata = {
    title: 'Meals',
    description: 'Meals Page'
}


const Meals = () => {

    return (
        <div className='p-6'>
            <h1 className={`my-2 text-2xl font-semibold text-gray-500`}>Choose your Meals From Here</h1>
            <MealsComp />
        </div>
    );
};

export default Meals;