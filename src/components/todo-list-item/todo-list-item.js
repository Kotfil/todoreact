import React, {Component} from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

   state = {

       done: false,
       important: false
   };


    getClick = () => {
        this.setState(({done}) => {
          return {
              done: !done
          }
        })
    }

    onMarkImporant = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }

    render() {

        const {label} = this.props;
        const {done,important} = this.state;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if(important) {
            classNames += ' important';
        }

        return (
            <span className={classNames}>
      <span
          className="todo-list-item-label"

          onClick={this.getClick}>
        {label}
      </span>

      <button type="button"
              onClick={this.onMarkImporant}
              className="btn btn-outline-success btn-sm float-right">
          *
        <i className="fa fa-check" aria-hidden="true"/>
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
          del
        <i className="fa fa-scissors" aria-hidden="true"/>
      </button>
    </span>
        );

    }
}

