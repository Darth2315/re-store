import React from 'react';
import './pre-footer.css';
import delivery from './fast.svg';
import original from './shield.svg';
import checking from './smiling.svg';
import payment from './payment.svg';
import up from './up.svg';

const PreFooter = () => {
    return (
        <div className="pre-footer">
            <div className="info-item">
                <img src={delivery} alt="delivery icon"/>
                <div className="info-item-text">
                    Безкоштовна доставка <br/>
                    <span>на всі замовлення від 1000 грн</span>
                </div>
            </div>

            <div className="info-item">
                <img src={original} alt="original product icon"/>
                <div className="info-item-text">
                    100% оригінальна продукція <br/>
                    <span>більш ніж 12000 ароматів</span>
                </div>
            </div>

            <div className="info-item">
                <img src={checking} alt="check mark icon"/>
                <div className="info-item-text">
                    Перевіряй при отриманні<br/>
                    <span>а потім плати</span>
                </div>
            </div>

            <div className="info-item">
                <img src={payment} alt="payment icon"/>
                <div className="info-item-text">
                    Оплата: готівка / LIQPAY <br/>
                    <span>тільки безпечна оплата</span>
                </div>
            </div>

            <button className="btn-up">
                <img src={up} alt="up button"/>
            </button>
        </div>
    )
}

export default PreFooter;
