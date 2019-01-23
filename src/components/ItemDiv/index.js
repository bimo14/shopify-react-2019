import React from 'react';
import unescape from 'unescape';
import Star from '../Star';
import './ItemDiv.css';

const itemDiv = (props) => {

    let dangerousHTML = {
        __html: unescape(props.item.body)
    };

    const starClicked = () => props.starClicked(props.item);

    return (
        <div className='__item_div'>
            <div className='__item_div-star-block d-inline-block'>
                <Star renderFavourite={props.isFavourite} click={starClicked}></Star>
            </div>
            <div className='__item_div-title-block d-inline-block'>
                <p>{props.item.title}</p>
            </div>
            <div className='__item_div-detail-block d-inline-block' dangerouslySetInnerHTML={dangerousHTML}></div>
        </div>
    );
};

export default itemDiv;