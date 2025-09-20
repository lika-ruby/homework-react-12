import { Component } from "react";
import { Label, Input } from "./Filter";

export class Filter extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <Label>
        Filter
        <Input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </Label>
    );
  }
}
