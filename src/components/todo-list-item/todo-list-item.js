import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {



    getClick = () => {
        console.log(`Done ${this.props.label}`)
    }

    render() {

        const {label, important = false} = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className="todo-list-item">
      <span
          className="todo-list-item-label"
          style={style}
          onClick={this.getClick}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-check" aria-hidden="true"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-scissors" aria-hidden="true"/>
      </button>
    </span>
        );

    }
}

