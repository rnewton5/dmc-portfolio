import React, { Component } from 'react';
import './Paginator.css';
import Page from './Page.js';

class Paginator extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.buildPages();
        this.state = {
            openDropDown: false,
            activePage: Object.keys(this.pages)[0]
        };
    }

    handleClick(e) {
        e.preventDefault();

        this.setState({
            activePage: e.target.id
        });
    }

    buildPages() {
        const { videos = [] } = this.props;

        // Building a javascript object that contains categories as keys and 
        // and array of videos in thoses categories
        this.pages = {};
        for (var i = 0; i < videos.length; i++) {
            let category = videos[i].category;
            if (videos[i].category in this.pages) {
                this.pages[category].push(videos[i]);
            } else {
                this.pages[category] = [];
                this.pages[category].push(videos[i]);
            }
        }
    }

    render() {
        var tabs = [];
        for (var page in this.pages) {
            tabs.push(
                <button
                    key={page}
                    id={page}
                    className={(this.state.activePage === page) ? "paginator_tab active" : "paginator_tab"}
                    onClick={this.handleClick}>
                    {page}
                </button>);
        }

        return (
            <div>
                <div className="paginator_tab-list">
                    {tabs}
                </div>
                <Page videos={this.pages[this.state.activePage]} />
            </div>
        );
    }
}

export default Paginator;
