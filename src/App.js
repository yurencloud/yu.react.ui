import React, { Component } from 'react'
import ButtonExample from './example/ButtonExample'
import RadioExample from './example/RadioExample'
import InputExample from './example/InputExample'
import CheckboxExample from './example/CheckboxExample'
import './main.scss'
import './assets/yu.react.ui.scss'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { active: 'Checkbox' }
  }

  getMenuItem(name) {
    const { active } = this.state
    return (
      <li>
        <button type="button" className={active === name ? 'active' : ''} onClick={() => this.changeActive(name)}>{name}</button>
      </li>
    )
  }

  showExample() {
    const { active } = this.state
    switch (active) {
      case 'Button':
        return <ButtonExample />
      case 'Radio':
        return <RadioExample />
      case 'Input':
        return <InputExample />
      case 'Checkbox':
        return <CheckboxExample />
      default:
    }
  }

  changeActive(active) {
    this.setState({ active })
  }

  render() {
    return (
      <div className="App">
        <div className="web-slider">
          <ul>
            {this.getMenuItem('Button')}
            {this.getMenuItem('Radio')}
            {this.getMenuItem('Input')}
            {this.getMenuItem('Checkbox')}
          </ul>
        </div>
        <div className="web-content">
          {this.showExample()}
        </div>
      </div>
    )
  }
}

export default App
