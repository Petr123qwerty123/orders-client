import React, {useState} from 'react';
import Input from "./UI/Input/Input";
import {Link} from "react-router-dom";
import Button from "./UI/Button/Button";

const SearchForm = () => {
    const [orderId, setOrderId] = useState('');

    return (
        <div>
            <form>
                <Input
                    value={orderId}
                    onChange={e => setOrderId(e.target.value)}
                    type='number'
                    placeholder='Введите ID заказа'
                />
                <Link to={`/orders/${orderId}`}>
                    <Button>
                        Посмотреть
                    </Button>
                </Link>
            </form>
        </div>
    );
};

export default SearchForm;