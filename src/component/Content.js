import React, { Component } from 'react';
import './Content.css';
import Paginator from './Paginator.js';

class Content extends Component {
    render() {
        return (
            <div className="content_container">
                <Paginator videos={this.props.videos} />
                <div className="content_copyright">
                    <hr />
                    <p>&copy; 2018 - Daynnah Carmona</p>
                </div>
            </div>
        );
    }
}

export default Content;
