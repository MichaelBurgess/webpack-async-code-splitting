import React, { Component } from "react";
import { connect } from "react-redux";
import Home from "../components/Home";

const mapDispatchToProps = dispatch => {
  return {
    onClickSetMessage: message => dispatch({
      type: "HOME_SET_MESSAGE",
      message
    })
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    match: ownProps.match,
    message: state.home.message
  }
};

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { messageBoxValue: "" };
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onClickSetMessage = this.onClickSetMessage.bind(this);
  }

  onMessageChange(message) {
    this.setState({
      messageBoxValue: message
    });
  }

  onClickSetMessage() {
    this.props.onClickSetMessage(this.state.messageBoxValue);
  }

  render() {
    return <Home match={this.props.match}
                 messageBoxValue={this.state.messageBoxValue}
                 message={this.props.message}
                 onMessageChange={this.onMessageChange}
                 onClickSetMessage={this.onClickSetMessage}
           />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);