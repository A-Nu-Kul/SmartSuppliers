import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'

const Duke = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, page, pages } = productList

    useEffect(() =>{
        dispatch(listProducts(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
      <div>
        <div className='title'>
        <h1>Duke</h1>
        <div className='underline'></div>
        </div>
        {loading ? ( <Loader>Loading...</Loader>) : error ? (<Message variant='danger'>{error}</Message> ): (
            <div>
            <Row>   
                 {products.map((product) =>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                       <Product product={product} />
                    </Col>
                    ))}
            </Row>
            
            <Paginate pages={pages} page={page} keyword={keyword ? keyword: ''} />
            </div>
            )}
     </div>

)}

export default Duke
