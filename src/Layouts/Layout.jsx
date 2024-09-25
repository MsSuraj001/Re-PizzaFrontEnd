import React, { useEffect } from 'react'
import Pizzalogo from '../assets/Images/pizza1.png'
import Footer from '../Components/Footer'
import CartIcon from '../assets/Images/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Redux/Slices/AuthSlice'
import { getCartDetails } from '../Redux/Slices/CartSlice'

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

                <nav className="flex items-center sm:justify-around justify-between px-7 h-16 text-[#6B7280] font-mono border-none shadow-lg">

                    <div className="hidden  sm:flex items-center justify-center cursor-pointer"
                    onClick={() => navigate('/')}
                    >
                        <p>Pizza App</p>
                        <img className='hidden md:block' src={Pizzalogo} alt="Pizza logo" />
                    </div>

                    <div className='sm:hidden w-12 h-10'>
                            {/* <img src={menu} alt="" onClick={()=>{}}/> */}
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
                                        <p className='text-black inline'>{cartsData?.items?.length}</p>
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
