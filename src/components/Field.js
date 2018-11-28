import React, { Component } from 'react'

class Field extends Component {
    handleClick = () => {
      const { children } = this.props
      console.log(children.props)
      console.log(children.props.defaultValue)
      console.log(children.props.value)
      console.log(children)
    }

    render() {
      const { children } = this.props
      return (
        <div>
          <button type="button" onClick={this.handleClick}>点击</button>
          {children}
        </div>
      )
    }
}

export default Field
