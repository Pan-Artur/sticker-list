import { Component } from "react";

import { StyledSticker } from "./StyledSticker.js";

export class Sticker extends Component {
    render() {
        return (
            <StyledSticker key={this.props.id}>
                <button type="button" onClick={() => this.props.onStickerClick(this.props.label)}>
                    <img src={this.props.img} alt={this.props.label} />
                    <div>
                        <button type="button" className="delete-btn" onClick={(e) => {
                            e.stopPropagation();
                            this.props.onDeleteClick(this.props.label);
                        }}>Delete</button>
                    </div>
                </button>
            </StyledSticker>
        );
    }
}