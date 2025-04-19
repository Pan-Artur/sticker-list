import { Component } from "react";

import { StyledChoice } from "./StyledChoice.js";

export class Choice extends Component {
  render() {
    return (
      <StyledChoice>
        {this.props.selectedSticker}
      </StyledChoice>
    );
  }
}
