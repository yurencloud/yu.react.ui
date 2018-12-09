import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends Component {
    static defaultProps = {
      value: undefined,
      onChange() {},
    }

    static propTypes = {
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
      onChange: PropTypes.func,
    }

    constructor(props) {
      super(props)
      this.state = { checked: false }
    }

    handleClick = (e) => {
      e.preventDefault()
      const checked = !this.state.checked
      this.setState({ checked })
      this.props.onChange(checked)
    }

    render() {
      const { checked } = this.state
      const {
        label,
        value,
        onChange,
      } = this.props

      const YuRadio = classNames({
        'yu-radio': true,
        checked,
      })
      return (
      /* eslint-disable jsx-a11y/label-has-associated-control */
      /* eslint-disable jsx-a11y/label-has-for */
        <label className={YuRadio} onClick={this.handleClick}>
          <span className="radio">
            <input
              type="radio"
              defaultChecked={value}
              onChange={onChange}
            />
          </span>
          <span>{label}</span>
        </label>
      )
    }
}

export default Radio
