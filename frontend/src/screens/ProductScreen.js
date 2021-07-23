import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup} from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import { listProductDetails } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'


const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const { success: successProductReview, error: errorProductReview } = productReviewCreate

    useEffect(() =>{
      if(successProductReview) {
          alert('Review Submitted!')
          setRating(0)
          setComment('')
          dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
      }  
      dispatch(listProductDetails(match.params.id))  
    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    
    return (
    <div>
        <Link className='btn btn-light my-3' to='/' >
            Go Back
        </Link>
        {loading ?( <Loader />) : error ? (<Message variant ='danger'>{error}</Message> ): (
            <div>
            <Meta title={product.name} />
             <Row>
                <Col md={3}>
                     <Image src={ product.image } alr ={product.name} fluid/>
                </Col>
                 
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                    </ListGroup.Item>
                     <ListGroup.Item>Description:{product.description}</ListGroup.Item>
                     <ListGroup.Item>Features:{product.description}</ListGroup.Item>
                     <ListGroup.Item>Product Snapshot:{product.description}</ListGroup.Item>
                     <ListGroup.Item>Material of Construction:{product.description}</ListGroup.Item>
                     <ListGroup.Item>Applications:{product.description}</ListGroup.Item>
                     </ListGroup>
                </Col>
            </Row>
         </div>
        )}
    </div>
)}

export default ProductScreen
