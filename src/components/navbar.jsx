import React from 'react'
import { BsCart } from 'react-icons/bs';
import { Link } from '@reach/router';
import { useCart } from 'react-use-cart';


const navbar = () => {
    const {
        isEmpty,
        totalItems,

        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useCart();

    return (
        <div className='flex justify-between bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-400 px-6 py-6 text-black items-center w-full fixed h-20'>
            <div className='text-black sm:text-2xl text-lg'>
                <h1>ToDo List With AI Chatbot</h1>
            </div>
            <Link to='/cart'>
                <div className='cursor-pointer flex'>
                    <BsCart className='sm:text-2xl text-lg' />
                    {!isEmpty && <span className='text-xs sm:text-xs'>{totalItems}</span>}
                </div>
            </Link>
        </div>

    )
}

export default navbar