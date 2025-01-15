import React,{useEffect} from 'react'
import { listOrders} from '../../function/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import HashLoader from "react-spinners/HashLoader";
import { Helmet } from 'react-helmet';


import {
    Table,  Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
  } from "@chakra-ui/react"


const Orders = ({history}) => {
    const dispatch = useDispatch()
    const orderList = useSelector(state => state.orderList)
    const {loading,error,orders} = orderList
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    useEffect(()=>{
        if(userInfo && userInfo.isAdmin){
            dispatch(listOrders())
        }else{
            history.push('/login')
        }
    },[dispatch,history,userInfo])

    return (

        <div className = 'Users'>
            <Helmet>
                <title>Orders</title>
            </Helmet>
        <h1 className = 'titlepanel'> Orders :</h1>
        {loading ?  <div className='loading'>
                     <HashLoader   color={"#1e1e2c"}  loading={loading} size={40} />
                   </div> : 
                   error ? <h1>error</h1> :
                   <Box overflowX = 'auto' borderRadius='18px' border ='2px solid #e2e8f0'>
                   <Table  className = 'tableusers'  >
                       <Thead className = 'table-header' >
                        <Tr >
                            <Th color= "#fff"  w = '25%'>ID</Th>
                            <Th color= "#fff"  w = '25%'>User</Th>
                            <Th color= "#fff"  w = '25%'>Date</Th>
                            <Th color= "#fff"  w = '25%'>TOTAL</Th>
                        </Tr>
                      </Thead>
                      <Tbody >
                            {orders.map(order =>(
                                <Tr key = {order._id} >
                                    <Td >{order._id}</Td>
                                    <Td>{order.user && order.user.name}</Td>
                                    <Td>{order.createdAt.substring(0,10)}</Td>
                                    <Td>{order.totalPrice}</Td>
                                </Tr>
                            ))}
                      </Tbody>
                    </Table>
                    </Box>
                   }
            
        </div>
    )
}

export default Orders
