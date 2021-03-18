import React from 'react'

class ClassClock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }
  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        Time is: {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default ClassClock;