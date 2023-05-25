import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart';
import alanBtn from '@alan-ai/alan-sdk-web';
import { BsCartPlus } from 'react-icons/bs';
import { toast, Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const FoodItems = (props) => {

    const alanKey = "4a9162bec13a593bba1c7e0859d674162e956eca572e1d8b807a3e2338fdd0dc/stage";
    const { addItem } = useCart();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                console.log(command);
                if (command === 'addToCartAlan') {
                    // console.log(command);
                    // console.log(command.data);
                    addItem(command.itemDetails);
                    toast.success("Your item has been Successfully added to your cart");
                }
            }
        })
    });

    let { image, price, title } = props.data;
    const addToCart = () => {
        console.log(props.data);
        addItem(props.data);
        toast.success("The item has been Successfully added to your cart");
    }
    return (
        <div className='bg-white rounded-xl max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full shadow-none'>

            <Toaster position="top-center items-center h-screen" reverseOrder={false}></Toaster>
            <div className='w-full grid sm:px-0'>
                <center>
                    <div className='h-40 justify-center'>
                        <div className='sm:h-40 sm:w-60 md:h-40 md:w-60 px-2 py-2'>
                            <img src={image} alt="pancake" className='h-32' />
                        </div>
                    </div>
                </center>
                <div className='py-4 px-6 truncate'>
                    <h2>{title}</h2>
                    <p> Rs <span>{price}</span></p>
                </div>
                <div className='grid'>
                    <button onClick={() => addToCart()} className='justify-center rounded px-6 py-4 bg-blue-400 flex mx-4 mb-8' >Add To Cart <BsCartPlus size={18} /></button>
                </div>

            </div>
        </div>
    )
}

export default FoodItems