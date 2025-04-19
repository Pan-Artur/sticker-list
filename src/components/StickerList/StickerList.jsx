import { Component } from "react";
import { Sticker } from "../Sticker/Sticker.jsx";
import { Choice } from "../Choice/Choice.jsx";

import stickers from "../../stickers.json";

import { StyledStickerList } from "./StyledStickerList.js";

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  showStickerLabel = (label) => {
    this.setState({
      selectedSticker: label,
    });
  };

  render() {
    return (
      <>
        <StyledStickerList>
          {stickers.map((sticker) => (
            <Sticker
              key={sticker.label}
              img={sticker.img}
              label={sticker.label}
              onStickerClick={this.showStickerLabel}
            />
          ))}
        </StyledStickerList>
        <Choice selectedSticker={this.state.selectedSticker} />
      </>
    );
  }
}
