import React, { Component } from 'react';

class Counter extends Component {

    render() {

        return ( 
            <div>
                <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
              
                <button 
                    className="btn btn-secondary btn-sm m-2"
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >Increment</button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatValue()
    {
        const { value } = this.props.counter;

        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;