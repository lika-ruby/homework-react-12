import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
import { Hero } from "./components/Hero/Hero.jsx";

import { ContactList } from "./components/ContactList/ContactList.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import { GlobalStyle } from "./GlobalStyles.js";
import { Main } from "./App.js";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    if (localStorage.getItem("contacts")) {
      console.log("a");
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts")) });
    } else {
      console.log("b");
      localStorage.setItem(
        "contacts",
        JSON.stringify([
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ])
      );
    }
  }

  setFilter = (value) => {
    this.setState({ filter: value });
  };

  filterNumber = () => {
    const { contacts, filter } = this.state;
    if (!filter) return contacts;

    const text = filter.toLowerCase();
    return contacts.filter((cont) => cont.name.toLowerCase().includes(text));
  };

  addNumber = ({ name, number }) => {
    if (this.state.contacts.find((cont) => cont.name === name)) {
      alert(`Number ${name} is already in contacts`);
      return;
    }
    if (this.state.contacts.find((cont) => cont.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        { id: nanoid(8), name: name, number: number },
      ],
    }));
  };

  deleteNumber = (e) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (cont) => e.target.parentElement.id !== cont.id
      ),
    }));
  };

  render() {
    return (
      <Main className="App">
        <GlobalStyle />
        <Hero addNumber={this.addNumber} />
        <ContactList
          deleteNumber={this.deleteNumber}
          contacts={this.filterNumber()}
          filter={this.state.filter}
          onChange={this.setFilter}
          filterNumber={this.filterNumber}
        />
        <Footer />
      </Main>
    );
  }
}

export default App;
