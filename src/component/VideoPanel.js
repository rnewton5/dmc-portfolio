import React, { Component } from 'react';
import './VideoPanel.css';
import Video from './Video.js';

class VideoPanel extends Component {
    render() {

        return (
            <div className="video-panel">
                <Video id={this.props.id} />
                <h2>{this.props.title}</h2>
                <hr />
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default VideoPanel;
