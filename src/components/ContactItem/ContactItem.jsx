import { Component } from "react";
import { Item, Text, Number, Button } from "./ContactItem";

export class ContactItem extends Component {
  render() {
    return (
      <Item id={this.props.id}>
        <Text>
          {this.props.name}:<Number>{this.props.number}</Number>
        </Text>
        <Button type="button" onClick={this.props.deleteNumber}>
          ✖
        </Button>
      </Item>
    );
  }
}
