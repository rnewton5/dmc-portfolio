import React, { Component } from 'react';
import './Content.css';
import VideoPanel from './VideoPanel.js';

class Content extends Component {
    render() {
        const { videos = [] } = this.props;

        var videoPanels = [];
        for (var i = 0; i < videos.length; i++){
            videoPanels.push(<VideoPanel key={i} id={videos[i].id} title={videos[i].title} description={videos[i].description}/>);
        }

        return (
            <div className="content_container">
                {videoPanels}
                <div className="content_copyright">
                    <hr />
                    <p>&copy; 2018 - Daynnah Carmona</p>
                </div>
            </div>
        );
    }
}

export default Content;
