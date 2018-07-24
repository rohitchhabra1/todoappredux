import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './Actions'

class Welcome extends React.Component {
    constructor({ dispatch }) {
        super();
        this.dispatch = dispatch;
        this.state = { value: '', btn: 'text' }
    }
    handleChange = (e) => {
        this.setState({ value: e.target.value, btn: 'text' });
    }
    render() {
        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (this.state.value === '') {
                        this.setState({ btn: 'error' })
                        return
                    }
                    this.dispatch(addTodo(this.state.value))
                    this.setState({ value: '' })
                }}>
                    <label>TODO</label>
                    <input className={this.state.btn} value={this.state.value} onChange={this.handleChange} />
                    <input type='submit' value='Submit' />
                </form>
            </div>
        )
    }
}

export default connect()(Welcome);