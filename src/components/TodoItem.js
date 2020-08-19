import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from '../img/check.svg'
import checkCompleteImg from '../img/check-complete.svg'

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let className = 'TodoItem';
        let url = checkImg;
        
        if(item.isComplete) {
            className += ' TodoItem-complete';
            url = checkCompleteImg;
        }

        return (
            <div className={ className }>
                <img onClick={ onClick } src={ url } className="img-responsive" alt="Image" width={32} height={32} />
                <p>{ this.props.item.title }</p>
            </div>
        );
    }
}

export default TodoItem;