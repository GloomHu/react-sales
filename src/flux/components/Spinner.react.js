'use strict';

import React from 'react';

const Spinner = (props) => {
    // let bars = [];
    // let barStyle;

    // for (let i = 0; i < 12; i++) {
    //     barStyle = {};
    //     barStyle.WebkitAnimationDelay = barStyle.animationDelay =
    //         (i - 12) / 10 + 's';
    //     barStyle.WebkitTransform = barStyle.transform =
    //         'rotate(' + (i * 30) + 'deg) translate(146%)';
    //     bars.push(
    //         <div style={ barStyle } className="react-spinner_bar" key={ i } />
    //     );
    // }

    // return (
    //     <div { ...props } className="react-spinner">
    //         { bars }
    //     </div>
    // );
    return (
        <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
        </div>
    );
      
};

export default Spinner;