import React from 'react';
import './reviews-block.css';

import star from './star.svg';

const ReviewsBlock = () => {
    return (
        <div className="reviews">
            <div className="reviews__big-divider"></div>
            <div className="reviews__header">
                <div className="reviews__header_title">Відгуки покупців <span>(24)</span></div>
                <button className="reviews__header_btn">Написати відгук</button>
            </div>
            <div className="reviews__devider"></div>

            <div className="reviews__rating_title">Рейтинг</div>
            <div className="reviews__rating_subtitle">Оберіть строку щоб фільтрувати відгуки</div>

            <div className="rating__block">
                <div className="rating__block_item">
                    <span>5</span>
                    <img src={star} alt="rating star"/>
                    <div className="rating__block_indicator"></div>
                    <span>1415</span>
                </div>
                <div className="rating__block_item">
                    <span>4</span>
                    <img src={star} alt="rating star"/>
                    <div className="rating__block_indicator"></div>
                    <span>380</span>
                </div>
                <div className="rating__block_item">
                    <span>3</span>
                    <img src={star} alt="rating star"/>
                    <div className="rating__block_indicator"></div>
                    <span>43</span>
                </div>
                <div className="rating__block_item">
                    <span>2</span>
                    <img src={star} alt="rating star"/>
                    <div className="rating__block_indicator"></div>
                    <span>12</span>
                </div>
                <div className="rating__block_item">
                    <span>1</span>
                    <img src={star} alt="rating star"/>
                    <div className="rating__block_indicator"></div>
                    <span>2</span>
                </div>
            </div>
            <div className="reviews__count">1–8 із 24 відгуків</div>
            <div className="reviews__devider"></div>

            <div className="review_item">
                <div className="review__item_top">
                    <div className="review__item_stars">
                        <img src={star} alt="star-rating"/>
                        <img src={star} alt="star-rating"/>
                        <img src={star} alt="star-rating"/>
                        <img src={star} alt="star-rating"/>
                        <img src={star} alt="star-rating"/>
                    </div>
                    <div className="review__item_author">Alex</div>
                    <div className="review__item_date"><span>&#183;</span> 8 днів тому</div>
                </div>
                <div className="review__item_title">Чудовий аромат</div>
                <div className="review__item_text">
                    Приехал пробник. Сначала аромат показался резковатым, колким, но не отталкивающим (наверное потому что я привык к свежакам). Но распробовав парфюм понимаю, что он великолепен. Хочу полноценный флакон ))
                </div>
                <div className="review__item_recomends">
                &#10004;<span>Так</span>, я рекомендую цей продукт.
                </div>
                <div className="review__item_helpfull">
                    <span>Цей відгук корисний?</span>
                    <div className="review__item_yes">Так &#183;<span id="yes">1</span></div>
                    <div className="review__item_no">Ні &#183;<span id="no">0</span></div>
                </div>
                <div className="reviews__devider"></div>
            </div>

        </div>
    )
}

export default ReviewsBlock;