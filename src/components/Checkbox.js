import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Checkbox extends Component {
    static type = 'Checkbox'

    static propTypes = {
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      onChange: PropTypes.func,
      disabled: PropTypes.bool,
    }

    constructor(props) {
      super(props)
      this.state = { checked: this.getChecked(props) }
    }

    componentWillReceiveProps(props) {
      const checked = this.getChecked(props)

      if (this.state.checked !== checked) {
        this.setState({ checked })
      }
    }

    onChange = (e) => {
      if (this.props.disabled) return

      const { checked } = e.target

      if (this.props.onChange) {
        this.props.onChange(checked, this.props.value)
      }

      this.setState({ checked })
    }

    getChecked = (props) => {
      return (props.model && props.model.includes(props.value)) || Boolean(props.checked)
    }

    render() {
      const { checked } = this.state
      const { label, disabled } = this.props

      return (
        <label className={classNames({
          'yu-checkbox': true,
          checked,
          disabled,
        })}
        >
          <span className="checkbox">
            <input
              type="checkbox"
              checked={checked}
              onChange={this.onChange}
            />
          </span>
          <span>{label}</span>
        </label>
      )
    }
}

export default Checkbox
