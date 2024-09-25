import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getproductDetails } from "../../Redux/Slices/ProductSlice";
import Layout from "../../Layouts/Layout";
import { addProductToCart, getCartDetails, removeProductFromCart } from "../../Redux/Slices/CartSlice";
import VegProduct from "../ProductCart/vegProduct";
import emptyCart from '../../assets/Images/emptyCart.png';


function ProductDetails() {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const [productDetails, setProductDetails] = useState({});
    const [isInCart, setIsInCart] = useState(false); // Check if product is in cart
    const [cartDetails, setCartDetails] = useState();
    const { cartsData } = useSelector((state) => state.cart);
    // 

    async function fetchProductDetails() {
        const details = await dispatch(getproductDetails(productId));
        console.log(details);
        setProductDetails(details?.payload?.data?.data);

    }

    async function handleCart() {
        // Add product to cart
        const response = await dispatch(addProductToCart(productId));
        if(response?.payload?.data?.success){
            setIsInCart(true);
            dispatch(getCartDetails()); // Fetch cart details and update state
        }
    }

    async function handleRemove() {
        // Remove product from cart
        const response = await dispatch(removeProductFromCart(productId));
        if(response?.payload?.data?.success) {
            setIsInCart(false);
            dispatch(getCartDetails()); // Fetch cart details and update state
        }
    }

    async function fetchCartDetails() {
      console.log("fetching cart details")
      const response = await dispatch(getCartDetails());
      console.log(response);
      setCartDetails(response?.payload?.data?.data);
  }

  async function handleRemove(productId) {
    // Remove product from cart
    const response = await dispatch(removeProductFromCart(productId));
    if(response?.payload?.data?.success) {
        console.log("removed successfully")
        dispatch(getCartDetails()); // Fetch cart details and update state
    }
}


    useEffect(() => {
        fetchProductDetails();
        fetchCartDetails();
    }, [productId,cartsData?.items?.length]);


    // useEffect(() => {
    //     console.log("re-rendering")
    //     fetchCartDetails();
    // }, [cartsData?.items?.length]);

    return (
        <Layout>
        <section className="overflow-hidden text-gray-600 body-font">
          <div className=" px-0 py-10 mx-auto sm:flex sm:flex-wrap">
            <div className="m-4 lg:w-3/4 md:w-4/5">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-64 rounded lg:w-3/4 lg:h-auto md:w-4/5"
                src={productDetails?.productImage}
              />
              <div className="w-full mt-3 lg:w-3/4 lg:pl-10 lg:py-10 xl:py-15 lg:mt-0 md:w-4/5 md:mx-1">
                <h2 className="text-sm tracking-widest text-gray-500 title-font">
                  {productDetails?.catogory}
                </h2>
                <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">
                  {productDetails?.productName}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="#FF9110"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 "
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="#FF9110"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="#FF9110"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="#"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="#"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="ml-3 text-gray-600">4 Reviews</span>
                  </span>
                  <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="#FF9110"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="#FF9110"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="#FF9110"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
                <p className="leading-relaxed">{productDetails?.discriptions}</p>

                {/* User Selection mode */}
                <div>
                  
                </div>

                <div className="flex pt-5">
                  <span className="text-2xl font-medium text-gray-900 title-font">
                    ₹{productDetails?.price}
                  </span>
                  {isInCart ? (
                    <button
                      className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
                      onClick={() => handleRemove(productId)}
                    >
                      Remove from cart
                    </button>
                  ) : (
                    <button
                      className="flex px-6 py-2 ml-auto text-white bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600"
                      onClick={handleCart}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>


            {/* this is the card */}
            {/* <div className="hidden md:block bg-yellow-300 lg:w-[20%] md:w-[15%] lg:h-auto">
                  <h1>Card</h1>
                  
            </div> */}

            {/* <Link to='/cart'> */}
            {cartDetails?.items?.length > 0 ? (
              // <h1>Your Card</h1>
              
              
              <div className="flex-1 max-w-4xl mx-auto mt-6 space-y-6 hidden md:hidden lg:block lg:mt-10 lg:w-full lg:mr-12">
                <div className="p-4 space-y-4 text-gray-800 border rounded-lg shadow-sm bg-gradient-to-r from-amber-50 to-orange-300 sm:p-6">
                  <p className="text-xl font-semibold text-gray-900 ">
                    Order summary
                  </p>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <dl className="flex items-center justify-between gap-4">

                        {
                            cartDetails?.items.map((item) => {
                                return (
                                    <dd key={item?.product?._id} className="text-base font-medium ">
                                        {item?.product?.productName} x {item?.quantity}

                                        <p>{item?.product?.price} x {item?.quantity}</p>
                                    </dd>
                                )
                            })
                        }


                      </dl>
                    </div>

                    <dl className="flex items-center justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <dt className="text-base font-bold ">Total</dt>
                      <dd className="text-base font-bold ">
                        ₹
                        {cartDetails?.items.length === 0
                          ? ''
                          : cartDetails?.items.reduce((acc, item) => acc + item?.quantity*item?.product?.price , 0) }
                      </dd>
                    </dl>
                  </div>
                  {cartDetails?.items.length > 0 && (
                    <Link
                      to={'/order'}
                      className="flex justify-center text-white bg-yellow-400 border border-yellow-500 rounded-md hover:bg-yellow-700"
                    >
                      Proceed to Checkout
                    </Link>
                  )}

                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {' '}
                      or{' '}
                    </span>
                    <Link
                      to={'/'}
                      className="inline-flex items-center gap-2 text-sm font-medium underline text-primary-700 hover:no-underline dark:text-primary-500"
                    >
                      Continue Shopping
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                {/* <h1>Cart</h1> */}
              </div>
            ) : (
              <div className="hidden md:block">
                <h1 className="text-center text-red-700 text-xl font-bold my-2">Cart is Empty</h1>
                <img className="h-64 w-48 my-6" src={emptyCart} alt="" />
              </div>
            )}
            {/* </Link> */}

          </div>
        </section>

        <VegProduct />
      </Layout>

    )
}


export default ProductDetails;