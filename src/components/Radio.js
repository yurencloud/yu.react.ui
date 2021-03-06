import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends PureComponent {
    static type = 'Radio'

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

    // props从RadioGroup流入Radio
    // 所有子Radio都会收到父的props
    componentWillReceiveProps(props) {
      const checked = this.getChecked(props)

      if (this.state.checked !== checked) {
        this.setState({ checked })
      }
    }

    onChange = (e) => {
      if (this.props.disabled) return

      const { checked } = e.target

      if (checked) {
        if (this.props.onChange) {
          this.props.onChange(this.props.value)
        }
      }

      this.setState({ checked })
    }

    getChecked = (props) => {
      return props.model === props.value || Boolean(props.checked)
    }


    render() {
      const { checked } = this.state
      const { label, disabled } = this.props

      return (
        <label className={classNames({
          'yu-radio': true,
          checked,
          disabled,
        })}
        >
          <span className="radio">
            <input
              type="radio"
              checked={checked}
              onChange={this.onChange}
            />
          </span>
          <span>{label}</span>
        </label>
      )
    }
}

export default Radio
