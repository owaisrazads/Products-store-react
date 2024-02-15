import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../config/redux/reducers/cartSlice'
import Swal from 'sweetalert2'


const SingleProductDetails = ({ image, title, description, price, id }) => {

  // UseSelector
  const selector = useSelector(state => state.cartItems.cartItems)

  // UseDispatch
  const dispatch = useDispatch()


  // Adding Product In Redux Cart
  const productAddToCart = () => {

    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {

        if (selector.length === 0) {

          // Product Addedd to Redux cart
          dispatch(addToCart({
            title: res.data.title,
            price: res.data.price,
            description: res.data.description,
            image: res.data.image,
            id: res.data.id
          }))

          // Sweet Alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product Added to Cart",
            showConfirmButton: false,
            timer: 1500
          });
          
        }
        else {
          let productAlreadyExist = false

          // Checking Product Exist in Cart or Not
          selector.map((item) => {

            if (item.id === res.data.id) {
              productAlreadyExist = true
            }
          })

          if (productAlreadyExist) {

            // Sweet Alert
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Product Already in Cart",
              showConfirmButton: false,
              timer: 1500
            });
          }
          else {

            // Product Addedd to Redux
            dispatch(addToCart({
              title: res.data.title,
              price: res.data.price,
              description: res.data.description,
              image: res.data.image,
              id: res.data.id
            }))

            // Sweet Alert
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product Added to Cart",
              showConfirmButton: false,
              timer: 1500
            });
          }

        }

      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <>
      {/* Product Details Card */}
      <div className='flex justify-center my-10'>
        <div className="card card-side w-[80%] rounded-xl bg-base-200 shadow-xl">
          <div className='w-[30%]'>
            <figure><img src={image} alt="Movie" /></figure>
          </div>
          <div className="card-body w-[40%]">
            <h2 className="card-title"> {title} </h2>

            <p> {description} </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={productAddToCart} > Add to Cart </button>
              <button className=" p-3 bg-primary text-white rounded-lg"  > {price} $ </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductDetails