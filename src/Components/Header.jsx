import React from 'react'
import { Navbar, Nav ,Container,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../REDUX/Slices/productSlice'

function Header({insideHome}) {
  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length
  return (
    <>
     <Navbar style={{zIndex:'10'}} expand="lg" className="bg-info position-fixed top-0 w-100">
      <Container>
       <Navbar.Brand > <Link to={'/'} className='text-light fw-bolder' style={{textDecoration:'none'}}> <i className="fa-solid fa-truck-fast me-1"></i> Cart</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="ms-auto">
          { insideHome && <Nav.Link >
              <input onChange={(e)=>dispatch(searchProduct((e.target.value.toLowerCase())))} style={{width:'400px'}} className='form-control' type="text" placeholder='Search Products Here!!!'/>
            </Nav.Link>}
           
              {/* <Link to={'/wishlist'} className='text-light fw-bolder' style={{textDecoration:'none'}}>
                <i className="fa-solid fa-heart text-primary"></i> Wishlist <Badge bg="secondary">{wishlistCount}</Badge></Link>
             
              <Link to={'/cart'} className='text-light fw-bolder' style={{textDecoration:'none'}}>
                <i className="fa-solid fa-cart-plus text-success"></i> Cart <Badge bg="secondary">{cartCount}</Badge></Link>
            */}

              <Nav.Link >              
                 <Link to={'/wishlist'} className='text-light fw-bolder' style={{textDecoration:'none'}}>
                <i className="fa-solid fa-heart text-primary"></i> Wishlist <Badge bg="secondary">{wishlistCount}</Badge></Link>
                              <Link to={'/cart'} className='text-light fw-bolder' style={{textDecoration:'none'}}>
              <i className="fa-solid fa-cart-plus text-success"></i> Cart <Badge bg="secondary">{cartCount}</Badge></Link>
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </>
  )
}

export default Header
















































// import React from 'react'
// import { Navbar, Nav ,Container,Badge } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// function Header() {
//   return (
//     <>
//      <Navbar style={{zIndex:'10'}} expand="lg" className="bg-info position-fixed top-0 w-100">
//       <Container>
//        <Navbar.Brand > <Link to={'/'} className='text-light fw-bolder' style={{textDecoration:'none'}}> <i className="fa-solid fa-truck-fast me-1"></i> Cart</Link> </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse  id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link >
//               <input style={{width:'400px'}} className='form-controller' type="text" placeholder='Search Products Here!!!'/>
//             </Nav.Link>
//             <Nav.Link >
//               <Link to={'/wishlist'} className='text-light fw-bolder' style={{textDecoration:'none'}}>
//                 <i className="fa-solid fa-heart text-primary"></i> Wishlist <Badge bg="secondary">10</Badge></Link>
                
//               <Link to={'/cart'} className='text-light fw-bolder' style={{textDecoration:'none'}}>
//                 <i className="fa-solid fa-cart-plus text-success"></i> Cart <Badge bg="secondary">10</Badge></Link>
//             </Nav.Link>
           
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
  
//     </>
//   )
// }

// export default Header