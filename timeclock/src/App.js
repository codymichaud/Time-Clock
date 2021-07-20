import './App.css';
import React from 'react';


class TimeofDay extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSec = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSec);
  }
}



export default TimeofDay;
