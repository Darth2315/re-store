import React from 'react';
import './product-description.css';
import logo from './montblanc_logo.png';

const ProductDescription = () => {
    return (
        <div className="product-description">
            <div className="product-description__title">Опис аромату</div>
            <div className="product-description__wrapper">
                <div className="product-description__left">
                    <div className="product-description__text">
                        <p>Древесно-ароматическая композиция Explorer от Montblanc - это приглашение в фантастическое путешествие, неотразимый призыв к приключениям. Звучание наполнено свежими зелеными нотами бергамота, контрастирующими с богатым ветивером и акцентами пачули.</p>
                        <p>Флакон Эксплорер с эффектом сафьяновой кожи украшен знаменитой звездой Монблан, представляющей шесть ледников самой высокой горы в Европе. Бутылка изготовлена из толстого стекла и отражает множество мест на земле, исследованных во время создания этого аромата.</p>
                        <p>Духи олицетворяют великолепие земных пейзажей, а также истинную природу человека, уходящего с протоптанных дорог, чтобы взбираться на сложные и неизведанные тропы. Выдающийся авантюрист, он имеет четкое представление об утонченности и элегантности и прекрасно приспосабливается ко всему, что бросает ему жизнь.</p>
                        <p>Мужественный и харизматичный Explorer - это идеальный парфюм для мужчин и символ приверженности бренда безупречному качеству.</p>
                    </div>
                
                    <div className="olfactory-block">
                        <div className="olfactory-block__type">Тип аромату:</div>
                        <div className="olfactory-block__top-notes">Початкова нота:</div>
                        <div className="olfactory-block__middle-notes">Нота серця:</div>
                        <div className="olfactory-block__bottom-notes">Кінцева нота:</div>
                    </div>

                    <div className="product-info">
                        <div className="product-info__year">Прем’єра аромату:</div>
                        <div className="product-info__country">Вироблено в:</div>
                        <div className="product-info__gender">Стать:</div>
                        <div className="product-info__status">Статус:</div>
                    </div>
                </div>
                <div className="product-description__right">
                    <div className="product-description__brand-logo">
                        <img src={logo} alt="brand logo"/>
                    </div>
                    <a href="/">Всі товари бренду</a>
                    <div className="product-description__line"></div>
                </div>
            </div>            
        </div>
    )
}

export default ProductDescription;