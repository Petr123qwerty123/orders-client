import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import {useFetching} from "../hooks/useFetching";
import OrdersService from "../services/OrdersService";
import Loader from "../components/UI/Loader/Loader";
import DefinitionList from "../components/UI/DefinitionList/DefinitionList";
import {getDateByString} from "../utils/formatDate";
import Table from "../components/UI/Table/Table";

const OrderPage = () => {
    let { id } = useParams();

    const [order, setOrder] = useState({});

    const [fetchOrderById, isLoading, orderError] = useFetching(async (id) => {
        const response = await OrdersService.getById(id);
        setOrder(response.data);
    });

    useEffect(() => {
        fetchOrderById(id)
    }, []);

    return (
        <div>
            {isLoading
                ?
                <div className='container'>
                    <Loader />
                </div>
                : order && !orderError
                    ?
                    <div style={{margin: '50px', alignContent: 'center'}}>
                        <Link to='/'>
                            <h1 style={{textAlign: 'right', fontSize: 15}}>На главную</h1>
                        </Link>

                        <DefinitionList title='Данные о заказе' items={
                            [
                                ['Трек номер', order?.track_number],
                                ['Сервис доставки', order?.delivery_service],
                                ['Дата создания', getDateByString(order?.date_created)]
                            ]
                        }/>
                        <DefinitionList title='Данные о доставке' items={
                            [
                                ['Имя', order?.delivery?.name],
                                ['Номер телефона', order?.delivery?.phone],
                                ['Индекс', order?.delivery?.zip],
                                ['Город', order?.delivery?.city],
                                ['Адрес', order?.delivery?.address],
                                ['Регион', order?.delivery?.region],
                                ['Email', order?.delivery?.email]
                            ]
                        }/>
                        <DefinitionList title='Данные о платеже' items={
                            [
                                ['Валюта', order?.payment?.currency],
                                ['Провайдер', order?.payment?.provider],
                                ['Название банка', order?.payment?.bank],
                                ['Стоимость доставки', order?.payment?.delivery_cost],
                                ['Общая стоимость товаров', order?.payment?.goods_total],
                                ['Таможенные сборы', order?.payment?.custom_fee]
                            ]
                        }/>
                        <Table
                            title='Товары'
                            data={order?.items || []}
                            alias={
                                {
                                    brand: 'Бренд',
                                    name: 'Название',
                                    size: 'Размер',
                                    price: 'Цена',
                                    sale: 'Скидка',
                                    total_price: 'Итоговая цена'
                                }
                            }
                        />
                    </div>
                    :
                    <div style={{margin: '50px', alignContent: 'center'}}>
                        <Link to='/'>
                            <h1 style={{textAlign: 'right', fontSize: 15}}>На главную</h1>
                        </Link>

                        <h1 style={{textAlign: 'center'}}>Нет такого заказа</h1>
                    </div>
            }
        </div>
    );
};

export default OrderPage;