import { Component } from "react";
import { ContactItem } from "../ContactItem/ContactItem.jsx";
import { Wrapper, List, Title } from "./ContactList.js";
import { Filter } from "../Filter/Filter.jsx";
import { EmptyMessage } from "../EmptyMessage/EmptyMessage.jsx";
import { Container } from "../Container/Container.jsx";

export class ContactList extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Your Contacts</Title>
          <Filter filter={this.props.filter} onChange={this.props.onChange} />
          {this.props.filterNumber().length === 0 ? (
            <EmptyMessage />
          ) : (
            <List>
              {this.props.contacts.map((cont) => (
                <ContactItem
                  key={cont.id}
                  id={cont.id}
                  name={cont.name}
                  number={cont.number}
                  deleteNumber={this.props.deleteNumber}
                />
              ))}
            </List>
          )}
        </Wrapper>
      </Container>
    );
  }
}
