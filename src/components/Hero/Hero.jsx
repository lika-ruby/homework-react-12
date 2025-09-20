import { Component } from "react";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import { Wrapper, Left, Title, Photo } from "./Hero.js";
import photo from "../../images/hero-photo.webp";
import { Container } from "../Container/Container.jsx";

export class Hero extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Left>
            <Title>PhoneBook</Title>
            <ContactForm addNumber={this.props.addNumber} />
          </Left>
          <Photo src={photo} alt="phone booth" />
        </Wrapper>
      </Container>
    );
  }
}
