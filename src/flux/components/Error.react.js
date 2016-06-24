'use strict';

import React from 'react';
import { render } from 'react-dom'
import {Link} from 'react-router';

const Error = React.createClass({
    render() {
        
        console.debug('kkk')
        return (
            <div>
                     <h2>{this.props.params.categoryId}</h2>
                <p><Link to="/">Return to the homepage</Link></p>
            </div>
        );
    }
});

export default Error;
