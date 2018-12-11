import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RadioGroup extends Component {
  onChange(value) {
    if (this.props.onChange) {
      this.props.onChange(value)
    }
  }

  render() {
    return (
      <div className="yu-radio-group">
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
                  onChange: this.onChange.bind(this),
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
  onChange: PropTypes.func,
}

export default RadioGroup
