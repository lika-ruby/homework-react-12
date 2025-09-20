import { Component } from "react";
import { Form, Labels, Label, Input, Button } from "./ContactForm.js";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const nameValue = e.target.name;
    console.log(nameValue);
    if (nameValue === "name") {
      this.setState({ name: e.target.value });
    } else {
      if (nameValue === "number") {
        this.setState({ number: e.target.value });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addNumber({ ...this.state });
    this.setState({ name: "" });
    this.setState({ number: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Labels>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+((['\- ][a-zA-Zа-яА-Я]+)?)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Elis Cupper"
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="^\+?[0-9\s\-]{5,20}$"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              placeholder="5423-423-647"
              required
            />
          </Label>
        </Labels>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
