import React, { Component } from 'react';
import './Page.css';
import VideoPanel from './VideoPanel.js';

class Page extends Component {
    render() {
        const { videos = [] } = this.props;

        var videoPanels = [];
        for (var i = 0; i < videos.length; i++){
            videoPanels.push(<VideoPanel key={i} id={videos[i].id} title={videos[i].title} description={videos[i].description}/>);
        }

        return (
            <div>
                {videoPanels}
            </div>
        );
    }
}

export default Page;
