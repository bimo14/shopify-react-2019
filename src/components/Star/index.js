import React from 'react';

const star = (props) => {

    const starColor = props.renderFavourite ? '#24975D' : '#B4B4B4';

    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={starColor} stroke={starColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star" onClick={props.click}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>

};

export default star;