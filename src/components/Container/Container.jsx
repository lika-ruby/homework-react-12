import { Component } from "react";
import { ContainerSect } from "./Container.js";

export class Container extends Component {
  render() {
    return <ContainerSect>{this.props.children}</ContainerSect>;
  }
}
