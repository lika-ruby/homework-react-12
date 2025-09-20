import { Component } from "react";
import { Wrapper, Text } from "./EmptyMessage";

export class EmptyMessage extends Component {
  render() {
    return (
      <Wrapper>
        <Text>There are any numbers...</Text>
      </Wrapper>
    );
  }
}
