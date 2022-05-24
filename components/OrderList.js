import {orderList} from "../constants/ui/orderList";

export default function OrderList({onChange}) {

    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value='0'>clear</option>
            { orderList.map( el => (
                <option value={el.id} key={el.id}>{el.name}</option>
            ))}
        </select>
    )
}
