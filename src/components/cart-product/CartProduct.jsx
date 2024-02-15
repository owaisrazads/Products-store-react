import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem } from '../../config/redux/reducers/cartSlice'

const CartProduct = () => {

    // UseSelector
    const selector = useSelector(state => state.cartItems.cartItems)

    // UseDispatch
    const dispatch = useDispatch()

    // Delete Items From Cart
    const dltCartItem = (index) => {
        console.log(index);
        dispatch(removeCartItem({
            index: index
        }))
    }


    return (
        <>
            <div className='mt-10 p-20'>
                <h1 className='text-2xl font-bold'> Cart Items </h1>

                {selector.length > 0 ? selector.map((item, index) => {
                    return <div key={item.id} className="flex w-full mt-5 p-5 items-center cursor-pointer bg-base-200 shadow-xl">
                        <div>
                            <figure><img src={item.image} className='w-[100px]' alt="Shoes" /></figure>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title"> {item.title.slice(0, 20)}... </h2>
                            <h4> {item.price} </h4>
                            <p> {item.description.slice(0, 50)}... </p>
                        </div>

                        <div>
                            <button className='p-3 bg-black rounded-lg text-white' onClick={() => dltCartItem(index)}> Delete </button>
                        </div>

                    </div >
                }) : <h1 className='mt-5'> No Items in Cart </h1>}
            </div>

        </>
    )
}

export default CartProduct