import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/Slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  useEffect(() => {

    if (cartItems?.length > 0) {
      setCartTotal(cartItems?.map(item => item.totalPrice).reduce((t1, t2) => t1 + t2))
    } else
      setCartTotal(0)


  }, [cartItems])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1)
      dispatch(decQuantity(product.id))
    else
      dispatch(removeCartItem(product.id))

  }

  const handleCheckout = () =>{
    dispatch(emptyCart())
    toast.success("Order placed successfully.. thank you for purchasing from us!!!")
    setTimeout(()=>{
      navigate('/')
    },2000)
  }
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '100px' }}>
        {
          cartItems?.length > 0 ?
            <div className="pt-5">
              <h1>Cart Summary</h1>
              <div className="row mt-5">
                <div className="col-lg-8">
                  <table className="table">
                    <thead>
                      <tr>
                        <td>#</td>
                        <td>Title</td>
                        <td>Image</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>...</td>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems?.map((products, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{products.title.slice(0, 16)}...</td>
                            <td><img width={'60px'} height={'60px'} src={products.thumbnail} alt="" /></td>
                            <td><div className='d-flex'>
                              <button onClick={() => handleDecrementQuantity(products)} className='btn fw-bolder'>-</button>
                              <input value={products.quantity} style={{ width: '50px' }} className='form-control' type="text" placeholder='0' readOnly />
                              <button onClick={() => dispatch(incQuantity(products.id))} className='btn fw-bolder'>+</button>
                            </div></td>
                            <td>$ {products.totalPrice}</td>
                            <td><button onClick={() => dispatch(removeCartItem(products.id))} className='btn'><i className="fa-solid fa-trash text-primary"></i></button></td>
                          </tr>
                        ))

                      }
                    </tbody>
                  </table>
                  <div className="float-end mt-3">
                    <button onClick={()=>dispatch(emptyCart())} className='btn btn-primary'>EMPTY CART</button>
                    <Link className='btn btn-danger ms-5' to={'/'}>Shop More</Link>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="shadow border rounded p-4">
                    <h5>Total Items: <b className='text-primary'>{cartItems?.length}</b></h5>
                    <h4>Total Amount: <b className='text-primary'>{cartTotal}</b></h4>
                    <div className="d-grid mt-4">
                      <button onClick={handleCheckout} className="btn btn-success">Check Out</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <div style={{ height: '70vh' }} className="w-100 d-flex justify-content-center align-items-center flex-column">
              <img className='image-fluid' width={'400px'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="" />
              <h3>Your Cart is Empty!!!</h3>
            </div>
        }
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Cart