import React, { useRef } from "react";
import Link from "next/link";
import {BsFillBagCheckFill, BsBagFill } from "react-icons/bs";
import {MdAccountCircle } from "react-icons/md";
import { AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)

  const toggleCart = () => {
      if (ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
      }
      else if (!ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')
      } 
  }

  const ref = useRef()

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mx-5 w-28 shadow-transparent h-4">
        <Link href="/" legacyBehavior>
          <a><img src="https://www.linkpicture.com/q/Auto-Lovers-Logo_1.jpg" alt="" /></a></Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-2 font-bold md:text-xl py-2">
          <li>
            <Link href="/Lifter">Lifter</Link>
          </li>
          <li>
            <Link href="/Sticker">Sticker</Link>
          </li>
          <li>
            <Link href="/StarLight">StarLight</Link>
          </li>
          <li>
            <Link href="/SolarStatue">SolarStatue</Link>
          </li>
        </ul>
      </div>
      <div  className=" cursor-pointer cart  absolute right-0 top-4 mx-5 flex">
        <Link href="/Login" legacyBehavior>
      <a><MdAccountCircle className="text-2xl md:text-3xl mx-4  " /></a>
    </Link>
        <BsBagFill onClick={toggleCart} className="text-2xl md:text-3xl " />
      </div>

      <div ref={ref} className={`w-70 h-[100vh] sideCart  absolute top-0 right-0 bg-purple-500 px-8 py-10 transform transition-transform ${Object.keys(cart).length !==0 ? 'translate-x-0' : 'translate-x-full' }`}>
        <h2 className="font-bold text-center text-xl">Shopping Cart</h2>
        <span onClick={toggleCart}  className="cursor-pointer absolute top-2 right-1 text-2xl text-violet-500 ">
          <AiFillCloseCircle /></span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length ==0 && <div className="my-4 font-normal">
            Your cart is Empty!
          </div> }
          {Object.keys(cart).map((k) => { return <li key={k} >
            <div className="item flex my-5">
            <div className="w-2/3 font-semibold ">{cart[k].name} </div>
            <div className="flex font-semibold items-center justify-center w-1/3 ">
            <AiFillMinusCircle onClick={() => {removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size,  cart[k].variant )}} className="cursor-pointer text-black" /> <span className="mx-2">{cart[k].qty} </span> <AiFillPlusCircle onClick={() => {addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size,  cart[k].variant )}}  className="cursor-pointer text-black" /></div>
            </div>
          </li> })}
          
        </ol>

        <div className="font-bold my-2">Subtotal : ₹ {subTotal} </div>
        <div className="flex">
        <button className="flex mr-2  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"><BsFillBagCheckFill className="m-1" /><Link href={'/Checkout'}>CheckOut</Link> </button>
        <button onClick={clearCart} className="flex mr-2  text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-lg"> ClearCart</button>
        </div>
        

      </div>
    </div>
  );
};

export default Navbar;
