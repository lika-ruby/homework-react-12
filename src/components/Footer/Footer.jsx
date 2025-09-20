import { Component } from "react";
import { FooterSect, Text } from "./Footer";
import { Container } from "../Container/Container.jsx";

export class Footer extends Component {
  render() {
    return (
      <FooterSect>
        <Container>
          <Text>Thank for giving your informations :)</Text>
        </Container>
      </FooterSect>
    );
  }
}
