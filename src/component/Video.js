import React, { Component } from 'react';
import Youtube from 'react-youtube';
import LazyLoad from 'react-lazy-load';
import './Video.css';

class Video extends Component {
    render() {
        const opts = require("../_ytopts.json");

        return (
            <div className="video_iframe-wrapper">
                <LazyLoad offsetVertical={300}>
                    <Youtube
                        className="video_iframe"
                        videoId={this.props.id}
                        opts={opts.small}
                        onReady={this._onReady}
                    />
                </LazyLoad>
            </div>
        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}

export default Video;
