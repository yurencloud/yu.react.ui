import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends Component {
    radio = {}

    static defaultProps = {
      value: undefined,
    }

    static propTypes = {
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
    }

    constructor(props) {
      super(props)
      this.state = { checked: false }
    }

    handleClick = (e) => {
      e.preventDefault()
      const { checked } = this.state
      this.setState({ checked: !checked })
    }

    saveRadio = (node) => {
      this.radio = node
      console.log(this.radio)
    }

    focus() {
      this.radio.focus()
    }

    blur() {
      this.radio.blur()
    }

    render() {
      const { checked } = this.state
      const {
        label,
        value,
      } = this.props

      const YuRadio = classNames({
        'yu-radio': true,
        checked,
      })
      return (
      /* eslint-disable jsx-a11y/label-has-associated-control */
      /* eslint-disable jsx-a11y/label-has-for */
        <label className={YuRadio} onClick={this.handleClick}>
          <span className="radio"><input type="radio" value={value} ref={this.saveRadio} /></span>
          <span>{label}</span>
        </label>
      )
    }
}

export default Radio
