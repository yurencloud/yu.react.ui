import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class RadioGroup extends Component {
  static defaultProps = {
    vertical: false,
  }

  onChange = (value) => {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    const { vertical } = this.props
    return (
      <div className={classNames({
        'yu-radio-group': true,
        vertical,
      })}
      >
        {
              React.Children.map(this.props.children, (item) => {
                if (!item) {
                  return null
                }

                const { type } = item.type
                if (type !== 'Radio') {
                  return null
                }

                return React.cloneElement(item, Object.assign({}, item.props, {
                  onChange: this.onChange,
                  model: this.props.value,
                }))
              })
          }
      </div>
    )
  }
}

RadioGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  vertical: PropTypes.bool,
  onChange: PropTypes.func,
}

export default RadioGroup
