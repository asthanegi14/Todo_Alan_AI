import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchFilter from 'react-filter-search';
import FoodItems from './FoodItems';
const Lists = () => {

    const [searchInput, setSearchInput] = useState('');
    const [products, setProducts] = useState([]);

    async function getResponse() {
        const ans = await fetch('https://fakestoreapi.com/products')
            .then(ans => ans.json());
        setProducts(await ans);
    }

    useEffect(() => {
        getResponse();
    });

    return (
        <div className='bg-gray-200 my-20'>
            <center>
                <div className='flex justify-center w-fit text-black mx-2 border rounded-lg bg-white'>
                    <div>
                        <input value={searchInput} type="text" onChange={(e) => setSearchInput(e.target.value)} placeholder='Search for an item' className='px-4 py-2 rounded-lg' />
                    </div>
                    <div className='px-4 py-2 cursor-pointer'>
                        <AiOutlineSearch size={20} />
                    </div>
                </div>
            </center>
            <SearchFilter
                value={searchInput}
                data={products}
                renderResults={results => (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8 sm:justify-between max-w-screen-lg p-4 mx-auto justify-center w-full h-5/6'>
                        {results.map((item, i) => (
                            <FoodItems data={item} key={i} />
                        ))}
                    </div>
                )} />
            {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8 sm:justify-between max-w-screen-lg p-4 mx-auto justify-center w-full h-5/6'>
                <div>
                    <div>
                        <img src={Pancake} alt="pancake" className='object-fill h-full w-full' />
                    </div>
                    <div className='grid sm:grid-cols-2'>
                        <button className='px-6 py-4 bg-blue-400' onClick={()=> addToCart()}>Add To Cart</button>
                        <button className='px-6 py-4 bg-yellow-500'>Buy Now</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Chicken} alt="chicken" className='object-fill h-fit w-full' />
                    </div>
                    <div className='grid sm:grid-cols-2'>
                        <button className='px-6 py-4 bg-blue-400'>Add To Cart</button>
                        <button className='px-6 py-4 bg-yellow-500'>Buy Now</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Fries} alt="fries" className='object-fill h-full w-full' />
                    </div>
                    <div className='grid sm:grid-cols-2'>
                        <button className='px-6 py-4 bg-blue-400'>Add To Cart</button>
                        <button className='px-6 py-4 bg-yellow-500'>Buy Now</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Pasta} alt="pasta" className='object-fill h-full w-full' />
                    </div>
                    <div className='grid sm:grid-cols-2'>
                        <button className='px-6 py-4 bg-blue-400'>Add To Cart</button>
                        <button className='px-6 py-4 bg-yellow-500'>Buy Now</button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={Roti} alt="roti" className='object-fill h-full w-full' />
                    </div>
                    <div className='grid sm:grid-cols-2'>
                        <button className='px-6 py-4 bg-blue-400'>Add To Cart</button>
                        <button className='px-6 py-4 bg-yellow-500'>Buy Now</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Lists