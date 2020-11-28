import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import ModalForm from "./ModalForm";
class Backoffice extends Component {
  state = {
    showAlert: false,
    success: null,
  };
  handleAlert = (response, show) => {
    this.setState({ showAlert: show });

    if (response) {
      this.setState({ success: true });
    } else {
      this.setState({ success: false });
    }
  };
  render() {
    return (
      <div>
        {this.state.showAlert && (
          <Alert
            variant={this.state.success ? "success" : "danger"}
            dismissible
            onClose={() => this.setState({ showAlert: false })}
          >
            <Alert.Heading>
              {this.state.success ? "Data posted" : "Error"}
            </Alert.Heading>
          </Alert>
        )}
        <ModalForm handleAlert={this.handleAlert} />
      </div>
    );
  }
}

export default Backoffice;

// "https://striveschool-api.herokuapp.com/api/product/",
// {
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjI5ZDk4MzViMDAwMTc1ODRlZTUiLCJpYXQiOjE2MDU3ODgzMTcsImV4cCI6MTYwNjk5NzkxN30.oP4BYUhxzJrIcZ0PWD68xETCimnePC7kIrswf4xirag",
//   },
// }
