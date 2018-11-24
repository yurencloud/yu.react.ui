import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class Radio extends Component {
  constructor(props) {
    super(props)
    this.state = { checked: false }
  }

  handleClick = (e) => {
    e.preventDefault()
    const { checked } = this.state
    this.setState({ checked: !checked })
  }

  render() {
    const { checked } = this.state
    const {
      label,
    } = this.props

    const YuRadio = classNames({
      'yu-radio': true,
      checked,
    })
    return (
    // TODO::双向绑定待完成
    /* eslint-disable jsx-a11y/label-has-associated-control */
    /* eslint-disable jsx-a11y/label-has-for */
      <label className={YuRadio} onClick={this.handleClick}>
        <span className="radio"><input type="radio" /></span>
        <span>{label}</span>
      </label>
    )
  }
}


Radio.propTypes = {
  label: PropTypes.string.isRequired,
}

// Radio.defaultProps = {
//   checked: false,
// }
export default Radio
