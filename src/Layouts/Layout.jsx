import React, { useEffect } from 'react'
import Pizzalogo from '../assets/Images/pizza1.png'
import Footer from '../Components/Footer'
import CartIcon from '../assets/Images/cart.svg'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Slices/AuthSlice'
import { getCartDetails } from '../Redux/Slices/CartSlice'
// import  Account  from '../assets/Images/account.png'

function Layout({ children }) {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const { cartsData } = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleLogout(e) {
        e.preventDefault();
        dispatch(logout());  
    }

    async function fetchCartDetails() {
        const res = await dispatch(getCartDetails());
        console.log("cart Details", res); //this is the work
        if(res?.payload?.isUnauthorized) {
            console.log("unauthorized");
            dispatch(logout());
        }
    }

    useEffect(() => {
        console.log(typeof(isLoggedIn))  // boolean
        if(isLoggedIn) {
            fetchCartDetails();
        }
    }, []);

    return (
        <>
            <div>

                <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">

                    <div className="flex items-center justify-center cursor-pointer"
                    onClick={() => navigate('/')}
                    >
                        <p>Pizza App</p>
                        <img className='hidden md:block' src={Pizzalogo} alt="Pizza logo" />
                    </div>

                    <div className='hidden md:block'>
                        <ul className='flex gap-4'>

                            <li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link to={'/menu'}>Menu {' '}</Link>
                            </li>

                            <li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link to='/service'>Services {' '}</Link>
                            </li>

                            <li className='hover:text-[#FF9110] cursor-pointer'>
                                {' '}
                                <Link to='/about'>About {' '}</Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <ul className='flex gap-4'>
                            <li className='hover:text-[#FF9110]'>
                                {isLoggedIn ? (
                                    <Link onClick={handleLogout}>Logout</Link>
                                ) : (
                                    <Link to={'/auth/login'}>Login</Link>
                                )}
                            </li>

                            {isLoggedIn && (
                                <Link to={'/cart'}>
                                    <li className='relative'>
                                        <img src={CartIcon} className='w-8 h-8 inline' />
                                        {' '}
                                        <div className='rounded-full text-white flex justify-center items-center absolute bg-red-600 h-5 w-5 left-4 bottom-4'>
                                            <p className='text-center'>{cartsData?.items?.length}</p>
                                        </div>
                                    </li>
                                </Link>
                                
                            )}
                        </ul>
                    </div>



                </nav>

                {children}

                <Footer />
            </div>
        </>
    )
}

export default Layout
