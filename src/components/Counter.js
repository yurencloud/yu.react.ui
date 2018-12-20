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
      max: PropTypes.number,
      min: PropTypes.number,
      readonly: PropTypes.bool,
    }

    handleSub = () => {
      const {
        value, step, onChange, min,
      } = this.props

      if (typeof min === 'number' && min >= value) return

      onChange(calculator.sub(value, step))
    }

    handleAdd = () => {
      const {
        value, step, onChange, max,
      } = this.props

      if (typeof max === 'number' && max <= value) return

      onChange(calculator.add(value, step))
    }

    handleInputChange = (val) => {
      const {
        min, max, onChange, step,
      } = this.props
      let value = val
      if (typeof min === 'number' && min >= value) {
        value = min
      }
      if (typeof max === 'number' && max <= value) {
        value = max
      }

      step.toString().indexOf('.') + 1
      // onChange(parseInt(value, 0))
      onChange(Number(value))
    }

    parseStringNumber(number) {
        const { step } = this.props
      if (step.toString().indexOf('.') > 0 && number.indexOf('.') > 0) {
        const precision = step.length - number.indexOf('.') - 1
        return parseFloat(number, precision)
      } else {
        return parseInt(number, 0)
      }
    }

    render() {
      const {
        disabled,
        value,
        min,
        max,
        readOnly,
      } = this.props

      return (
        <div className={classNames({
          'yu-counter': true,
          disabled,
        })}
        >
          <Button onClick={this.handleSub} disabled={disabled || min >= value}>-</Button>
          <Input onChange={this.handleInputChange} value={value} disabled={disabled} readOnly={readOnly} />
          <Button onClick={this.handleAdd} disabled={disabled || max <= value}>+</Button>
        </div>
      )
    }
}

export default Counter
