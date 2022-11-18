import { Component } from 'react';

class Clock extends Component {
  state = {
    movies: [],
    name: 'John',
    date: new Date().toLocaleTimeString(),
  };

// React Component Life cycle
  componentDidMount() {
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({ date: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div>
        <h3>{this.state.date}</h3>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <h2>Class component {this.state.name}</h2>
        <button onClick={this.handleClick}>Click me</button>
        <p>
          Lorem ipsum as;lkdfj laksjfl;aksj ;laskdjf ;lsakdjf
          ;laskdfj. asdfkj.
        </p>
      </div>
    );
  }
}

export default Clock;