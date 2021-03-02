import React, { useEffect } from 'react'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import Paginate from '../../components/Paginate'
import { listProducts, deleteProduct, createProduct } from '../../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../../configs/productConstants'
import { Link } from '@material-ui/core'

import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions'

const ProductListScreen = ({ history }) => {
  let navigate = useNavigate();

  const dispatch = useDispatch()

  const productDelete = useSelector(state => state.productDelete)
  const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

  const productCreate = useSelector(state => state.productCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate


  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList


  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin



  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo || !userInfo.isAdmin) {
      navigate('/login')
    }

    if (successCreate) {
      navigate(`/admin/product/${createdProduct._id}/edit`)
    }
    else {
      dispatch(listProducts('', 1))
    }

  }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct, 1])
  const deleteHandler = (id) => {
    if (window.confirm('Confirm Delete?')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3 bg-success rounded' onClick={createProductHandler}>
            <i className='fas fa-plus mr-2'></i>Create Product
                    </Button>
          <Button className='my-3 ml-2 mr-2 bg-dager rounded' onClick={() => dispatch(logout())}>
            Logout
                    </Button>

        </Col>

      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
        : (
          <>
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>SUB TEXT</th>
                  {/* <th>CUISINE</th>
                  <th>RESTAURANT</th> */}
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td><img className="ml-3" src={product.image} alt={product.name} width="40px" height="60px" /></td>
                    <td>{product.name}</td>

                    {/* <td>₹{product.price}</td>
                    <td>{product.cuisine}</td> */}
                    <td>{product.restaurant}</td>

                    <td>
                      <NavLink to={`/admin/product/${product._id}/edit`}>
                        <Button variant='light' className='btn-sm' >
                          <i className='fas fa-edit'></i>
                        </Button>

                      </NavLink>

                      <Button variant='danger' className='btn-sm' onClick={() =>
                        deleteHandler(product._id)}>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate pages={pages} page={page} isAdmin={true} />
          </>
        )}

    </>
  )
}

export default ProductListScreen
