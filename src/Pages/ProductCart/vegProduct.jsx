import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllProducts } from '../../Redux/Slices/ProductSlice';



function VegProduct() {

    const dispatch = useDispatch();

    const { productsData } = useSelector((state) => state.product);

    useEffect(() => {
        // This will be called when the component mounts
        dispatch(getAllProducts());
    }, []);

    return (
        <>
            <div className="mx-auto">
                <div className="flex flex-wrap justify-center">
                    {productsData.map((item) => {
                        return (
                            item.inStock && (
                                <div className="p-4  md:w-1/2 lg:w-1/3" key={item._id}>
                                    <Link to={`/product/${item._id}`}>
                                        <div className="overflow-hidden border rounded-lg border-opacity-60 shadow-md relative ">
                                                <img
                                                    src={item.productImage}
                                                    alt="Pizza Image"
                                                    className="object-cover object-center w-full lg:h-48 md:h-36"
                                                />


                                                {/* this is the like svg */}
                                                <svg className='absolute right-1 top-1 h-11'
                                                    fill="#" height="64px" width="64px" version="1.1" id="Layer_1" 
                                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                                    viewBox="-117.76 -117.76 747.52 747.52" xml:space="preserve" stroke="#">
                                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier"> <g> 
                                                        <g> 
                                                            <path  d="M467.01,64.373c-29.995-29.995-69.299-44.988-108.612-44.988c-36.779,0-73.259,13.662-102.4,39.919 c-29.15-26.257-65.621-39.919-102.4-39.919c-39.313,0-78.618,14.993-108.612,44.988c-59.981,59.981-59.981,157.235,0,217.225 L255.998,492.61L467.01,281.598C526.991,221.609,526.991,124.363,467.01,64.373z M448.919,263.49L255.998,456.403L63.085,263.499 c-49.903-49.911-49.903-131.115,0-181.018c24.175-24.175,56.32-37.487,90.513-37.487c31.206,0,60.399,11.563,83.695,31.889 l18.705,17.485l18.714-17.493c23.296-20.318,52.489-31.889,83.695-31.889c34.193,0,66.33,13.312,90.513,37.487 C498.831,132.375,498.822,213.587,448.919,263.49z"></path> 
                                                        </g> 
                                                        </g> </g>
                                                </svg>

                                                {/* this is the veg logo */}
                                                {item.catogory  && 
                                                    <div className='absolute left-1 top-1 p-1 bg-white rounded-sm'>
                                                        <div className='h-5 w-5 bg-green-600 rounded-full'>
                                                        
                                                        </div>
                                                    </div>
                                                }
                                                {/* this is the comtomise button   absolute right-3 top-40 */}
                                                <div className='absolute left-3 top-40 hidden md:hidden lg:block'>
                                                        <p className='text-white text-xl font-bold'> ₹{item.price}</p>
                                                </div>  
                                                <div className='absolute right-3 top-40 hidden md:hidden lg:block'>
                                                    <button className='bg-white px-2 rounded-md text-zinc-500'>CUSTOMISE</button>
                                                </div> 
                                                
                                        {/* </div> */}

                                        
                                            

                                            <div className="p-6 border">
                                                {/* <h2 className="text-xs font-medium tracking-widest text-green-500 title-font">
                                                    {item.catogory}
                                                </h2> */}
                                                <h1 className="mb-3 text-lg font-medium text-gray-900 title-font underline">
                                                    {item.productName}
                                                </h1>
                                                <p className="mb-4 text-base leading-relaxed">
                                                    {item.discriptions}
                                                </p>

                                                {/* this is the size and crust */}
                                                <div className='flex border-t-2 border-b-2 my-4'>
                                                    <div>
                                                        <p>j</p>
                                                    </div>
                                                </div>


                                                <div className='flex justify-between'>
                                                    <p className="text-lg font-medium text-gray-900 title-font md:block lg:hidden">
                                                        ${item.price}
                                                    </p>

                                                    <p className='hidden md:hidden lg:block'>

                                                    </p>

                                                    <button className='text-green-500 p-2 border-2 border-green-500 rounded lg:place-self-end'>Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default VegProduct
