import React from 'react';
import { connect } from 'react-redux';

import './cart-page.css';
import del from './delete.svg';
import add from './add.svg';
import minus from './minus.svg';

const Cart = ({ items, total, deliveryCost, onIncrease, onDecrease, onDelete }) => {

    const RenderRow = (item) => {
        const {id, name, count, total, img } = item;
  
        return (
            <div className="cart-item" key={id}>
                <img src={img} alt={name}/>
                <div className="cart-item-title">{name}</div>
                <div className="cart-item-count">{count}</div>
                <div className="cart-control-block">
                    <div className="cart-btn-block">
                        <img src={add} alt="add item" 
                            onClick={() => onIncrease(id)}/>
                        <img src={minus} alt="minus item" 
                            onClick={() => onDecrease(id)}/>
                        <img src={del} alt="delete item" 
                            onClick={() => onDelete(id)}/>
                    </div>  
                    <div className="cart-item-sum">{total} грн</div>
                </div>
            </div>
        )
    }

    return (
        <div className="cart">
            <div className="cart-title">Кошик</div>

            { items.map(RenderRow) }

            <div className="cart-total-block">
                <div className="cart-subtotal-title">Проміжний підсумок</div>
                <div className="cart-sum">{total} грн</div>
                <div className="cart-delivery-title">Доставка</div>
                <div className="cart-sum">{deliveryCost} грн</div>
                <div className="cart-total-title">Підсумок</div> 
                <div className="cart-total-sum cart-sum">{total + deliveryCost} грн</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        total: state.orderTotal,
        deliveryCost: state.deliveryCost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => console.log(`increase ${id}`),
        onDecrease: (id) => console.log('decrease'),
        onDelete: (id) => console.log('delete')
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);