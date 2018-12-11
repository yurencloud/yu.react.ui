import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends Component {
    static type = 'Radio'

    static defaultProps = {
      value: undefined,
    }

    static propTypes = {
      label: PropTypes.string.isRequired,
      value: PropTypes.any,
      onChange: PropTypes.func,
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

    onChange(e) {
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
      const { label } = this.props

      return (
      /* eslint-disable jsx-a11y/label-has-associated-control */
      /* eslint-disable jsx-a11y/label-has-for */
        <label className={classNames({
          'yu-radio': true,
          checked,
        })}
        >
          <span className="radio">
            <input
              type="radio"
              checked={checked}
              onChange={this.onChange.bind(this)}
            />
          </span>
          <span>{label}</span>
        </label>
      )
    }
}

export default Radio
