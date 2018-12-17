import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class CheckboxGroup extends Component {
    static defaultProps = {
      vertical: false,
    }

    onChange = (checked, value) => {
      if (this.props.onChange) {
        this.props.onChange(checked ? [...this.props.value, value] : this.props.value.filter((val) => {
          return val !== value
        }))
      }
    }

    render() {
      const { vertical } = this.props
      return (
        <div className={classNames({
          'yu-checkbox-group': true,
          vertical,
        })}
        >
          {
                    React.Children.map(this.props.children, (item) => {
                      if (!item) {
                        return null
                      }

                      const { type } = item.type
                      if (type !== 'Checkbox') {
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

CheckboxGroup.propTypes = {
  value: PropTypes.array,
  vertical: PropTypes.bool,
  onChange: PropTypes.func,
}

export default CheckboxGroup
