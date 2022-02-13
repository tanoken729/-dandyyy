import React from "react";
import Sample from "./Sample";

interface Props {}

interface State {
  message: string;
  counter1: number;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: "最初のメッセージ",
      counter1: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.doAction1 = this.doAction1.bind(this);
  }

  handleClick() {
    this.setState({
      message: "ボタンが押されました",
    });
  }
  doAction1() {
    this.setState({
      counter1: this.state.counter1 + 1,
    });
  }

  render() {
    return (
      <React.Fragment>
        <p style={{ color: "pink", fontSize: "30px" }}>Dandyyy</p>
        <Sample num={"5"} />
        <Sample num={"6"} />
        <Sample num={"7"} />

        <p>{this.state.message}</p>
        <button onClick={this.handleClick}>ボタン</button>
        <p>{this.state.counter1}</p>
        <button onClick={this.doAction1}>Click</button>
      </React.Fragment>
    );
  }
}

export default App;
