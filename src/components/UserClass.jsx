import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      counter2: 3,
    };
    // console.log("Children Constructor");
  }
  componentDidMount() {
    // console.log("Children Component Mounted");
  }
  componentDidUpdate() {
    // console.log("Childern Component Updated");
  }
  componentWillUnmount() {
    // console.log("Children Component Unmount");
  }
  render() {
    // console.log("Children render");
    const { name } = this.props;
    return (
      <div className="user-card">
        <h1>ClassCounter1: {this.state.counter1}</h1>
        <button
          onClick={() => {
            this.setState({
              counter1: this.state.counter1 + 1,
            });
          }}
        >
          Counter++
        </button>
        <h1>ClassCounter2: {this.state.counter2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h4>Contact: @itsmeshvm2</h4>
      </div>
    );
  }
}

export default UserClass;
