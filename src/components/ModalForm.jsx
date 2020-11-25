import React, { Component, useEffect, useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";
class ModalForm extends Component {
  state = {
    show: false,
    product: {},
    showAlert: false,
    success: false,
  };

  handleChange = (e) => {
    this.setState({
      product: {
        ...this.state.product,
        [e.currentTarget.id]: e.currentTarget.value,
      },
    });
  };

  submitData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/product/",
        {
          method: "POST",
          body: JSON.stringify(this.state.product),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NjI5ZDk4MzViMDAwMTc1ODRlZTUiLCJpYXQiOjE2MDU3ODgzMTcsImV4cCI6MTYwNjk5NzkxN30.oP4BYUhxzJrIcZ0PWD68xETCimnePC7kIrswf4xirag",
          },
        }
      );
      if (response.ok) {
        this.setState({ showAlert: true, show: false, success: true });
      } else {
        this.setState({ showAlert: true, show: false, success: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ showAlert: true, show: false, success: false });
    }
  };

  render() {
    return (
      <>
        <Button variant="primary" onClick={() => this.setState({ show: true })}>
          Add product
        </Button>
        {this.state.showAlert && !this.state.show && (
          <Alert
            variant={this.state.success ? "success" : "danger"}
            onClose={() => this.setState({ showAlert: false })}
            dismissable
          >
            <Alert.Heading>
              {this.state.success ? "Product added" : "Error!"}
            </Alert.Heading>
          </Alert>
        )}

        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              id={"name"}
              value={this.state.product.name}
              onChange={(e) => this.handleChange(e)}
            />
            <Form.Control
              id={"description"}
              value={this.state.product.description}
              onChange={(e) => this.handleChange(e)}
            />
            <Form.Control
              id={"brand"}
              value={this.state.product.brand}
              onChange={(e) => this.handleChange(e)}
            />
            <Form.Control
              id={"price"}
              type={"number"}
              value={this.state.product.price}
              onChange={(e) => this.handleChange(e)}
            />
            <Form.Control
              id={"imageUrl"}
              placeholder={"Image"}
              type={"url"}
              value={this.state.product.imageUrl}
              onChange={(e) => this.handleChange(e)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </Button>
            <Button variant="primary" onClick={() => this.submitData()}>
              Submit Product
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalForm;
