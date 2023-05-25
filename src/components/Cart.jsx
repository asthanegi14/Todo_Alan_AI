import React from 'react'
import { useCart } from 'react-use-cart';
import { BsCartX } from 'react-icons/bs';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,

    } = useCart();
    return (
        <div className='py-12 bg-gray-200 w-full'>
            <h1 className='text-center py-4 text-3xl'>
                {isEmpty ? 'Your Cart is Empty' : 'Welcome to your Cart '}
            </h1>
            <div className='justify-center w-full grid sm:px-0'>
                <div className='bg-gray-200'>
                    {items.map((item, index) => {
                        return (
                            <div key={index} className='mx-4 my-4 px-4 sm:flex grid bg-white rounded-xl'>
                                <div className='grid h-40 justify-center'>
                                    <div className='max-w-sm sm:h-80 sm:w-60 md:h-80 md:w-60 px-2 py-2 w-full'>
                                        <center>
                                            <img src={item.image} alt={item.title} className='h-32' />
                                        </center>
                                    </div>
                                </div>

                                <div className='grid sm:text-left text-center'>

                                    <h5 className='py-4 px-6 truncate'>
                                        {item.title}
                                    </h5>
                                    <div className='py-4 px-6' >Rs. {item.price}</div>
                                    <div className='py-4 px-6 '>Quantity ({item.quantity})</div>
                                    {/* <center> */}
                                    <div className='py-4 px-6 space-x-1 sm:content-center '>
                                        <button className='bg-blue-300 px-4 py-2 rounded-lg gap-6' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>

                                        <button className='px-4 py-2 rounded-lg gap-6 bg-red-400' onClick={() => removeItem(item.id)}>Remove</button>

                                        <button className='bg-blue-300 px-4 py-2 rounded-lg gap-6' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>

                                    </div>
                                    {/* </center> */}

                                </div>
                            </div>
                        )
                    })}
                </div>

                {!isEmpty &&

                    <div className='flex sm:flex-cols-2 md:grid-cols-2 justify-center sm:text-left text-center gap-6'>
                        {/* <div className='text-center py-6 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500  '> */}
                        <center>
                            <h4 className='truncate bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 w-fit text-center px-6 py-4 rounded-xl flex'>Total Price: Rs. {cartTotal}</h4>
                        </center>
                        {/* </div> */}
                        {/* <div className='text-center py-6 bg-gradient-to-r from-red-500 via-red-400 to-red-500 '> */}
                        <center>
                            <button className='bg-gradient-to-r from-red-500 via-red-400 to-red-500 pt-4 text-center px-6 py-4 rounded-xl flex' onClick={() => emptyCart()}>
                                <BsCartX size={20} /> Clear Cart</button>
                        </center>
                    </div>
                    // </div>
                }
            </div>
        </div >
    );
};

export default Cart