import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductCard = ({ title, price, description, image, id }) => {


  // UseNavigate
  const navigate = useNavigate()

  // Navigate to Show Product Details
  const showProductDetails = (id) => {
    navigate(`/products/${id}`)
  }


  return (
    <>
      {/* Single Product Card */}
      <div onClick={() => showProductDetails(id)} className="card w-72 cursor-pointer bg-base-100 shadow-xl">
        <figure><img src={image} className='w-[100px]' alt="Shoes" /></figure>

        <div className="card-body">
          <h2 className="card-title"> {title.slice(0, 20)}... </h2>
          <h4> {price} </h4>
          <p> {description.slice(0, 50)}... </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> Show Product </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard