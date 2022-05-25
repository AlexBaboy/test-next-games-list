import {orderList} from "../constants/ui/orderList";
import React from "react";
import {StyledOrderListBlock} from "./ui/StyledOrderListBlock";

// eslint-disable-next-line react/display-name
const OrderList = React.forwardRef(({onChange, disabled}, ref) => {

    return (
        <StyledOrderListBlock>
            <h3>Order by</h3>
            <select disabled={disabled} className='orderListSelect' ref={ref} onChange={(e) => onChange(e.target.value)}>
                <option value='0'>clear</option>
                { orderList.map( el => (
                    <option value={el.id} key={el.id}>{el.name}</option>
                ))}
            </select>
        </StyledOrderListBlock>
    )
})

export default OrderList
