import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from './Input'
import Button from './Button'

const calculator = require('yu.calculator')

class Counter extends Component {
    static defaultProps = {
      step: 1,
    }

    static propTypes = {
      value: PropTypes.number,
      step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      disabled: PropTypes.bool,
      onChange: PropTypes.func.isRequired,
    }

    handleSub = () => {
      const { value, step, onChange } = this.props
      onChange(calculator.sub(value, step))
    }

    handleAdd = () => {
      const { value, step, onChange } = this.props
      onChange(calculator.add(value, step))
    }

    onChange = (e) => {
      this.props.onChange(Number(e.target.value))
    }

    render() {
      const {
        disabled,
        value,
      } = this.props

      return (
        <div className={classNames({
          'yu-counter': true,
          disabled,
        })}
        >
          <Button onClick={this.handleSub} disabled={disabled}>-</Button>
          <Input onChange={this.onChange} value={value} disabled={disabled} />
          <Button onClick={this.handleAdd} disabled={disabled}>+</Button>
        </div>
      )
    }
}

export default Counter
