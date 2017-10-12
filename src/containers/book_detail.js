import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <p>Select a Book 1st</p>
        }

        return (
            <div>
            <div>Title: {this.props.book.title}</div>
            <span>Pages: {this.props.book.pages}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);