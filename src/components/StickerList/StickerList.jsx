// import { Component } from "react";
// import { Sticker } from "../Sticker/Sticker.jsx";
// import { Choice } from "../Choice/Choice.jsx";

// import stickers from "../../stickers.json";

// import { StyledStickerList } from "./StyledStickerList.js";

// export class StickerList extends Component {
//   state = {
//     selectedSticker: null,
//     stickersData: stickers,
//   };

//   showStickerLabel = (label) => {
//     this.setState({
//       selectedSticker: label,
//     });
//   };

//   // findDeletedSticker = (stickers) => {
//   //   stickers.map((sticker) => {
//   //     const index = stickers.indexOf(sticker.label);

//   //     if (index > -1) {
//   //       stickers.splice(index, 1);
//   //     }
//   //   });
//   // }

//   deleteSticker = (labelToDelete) => {
//     this.setState((prevState) => ({
//       stickersData: prevState.stickersData.filter(sticker => sticker.label !== labelToDelete)
//     }));
//   }

//   render() {
//     return (
//       <>
//         <StyledStickerList>
//           {stickers.map((sticker) => (
//             <Sticker
//               key={sticker.label}
//               img={sticker.img}
//               label={sticker.label}
//               onStickerClick={this.showStickerLabel}
//               onDeleteClick={this.deleteSticker}
//             />
//           ))}
//         </StyledStickerList>
//         <Choice selectedSticker={this.state.selectedSticker} />
//       </>
//     );
//   }
// }

import { Component } from "react";
import { Sticker } from "../Sticker/Sticker.jsx";
import { Choice } from "../Choice/Choice.jsx";
import stickers from "../../stickers.json";
import { StyledStickerList } from "./StyledStickerList.js";

export class StickerList extends Component {
  state = {
    selectedSticker: null,
    stickersData: [...stickers],
  };

  showStickerLabel = (label) => {
    this.setState({
      selectedSticker: label,
    });
  };

  deleteSticker = (labelToDelete) => {
    this.setState(prevState => ({
      stickersData: prevState.stickersData.filter(sticker => sticker.label !== labelToDelete),
      selectedSticker: prevState.selectedSticker === labelToDelete ? null : prevState.selectedSticker
    }));
  };

  render() {
    return (
      <>
        <StyledStickerList>
          {this.state.stickersData.map((sticker) => (
            <Sticker
              key={sticker.label}
              img={sticker.img}
              label={sticker.label}
              onStickerClick={this.showStickerLabel}
              onDeleteClick={this.deleteSticker}
            />
          ))}
        </StyledStickerList>
        <Choice selectedSticker={this.state.selectedSticker} />
      </>
    );
  }
}