import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import OrderForm from '../../OrderForm/OrderForm';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://polar-dusk-61914.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                // console.log(data)
            })
    }, [])

    // console.log(order)
    return (
        <div>
            <h2 className="text-black mt-4">My Orders</h2>
            <Row xs={1} md={2} lg={3} className="g-4 m-4">
                {
                    order.map(order => <OrderForm key={order._id} order={order}></OrderForm>)
                }
            </Row>
        </div>
    );
};

export default MyOrder;