import {connect} from "react-redux";

import {Board} from "./Board";
import { toggleCell, advanceStep,
        randomizeBoard, clearBoard } from "./actions";

const mapStateToProps = state => {
    return {
        board: state.board
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCell(x, y) {
            dispatch(toggleCell(x, y));
        },

        advanceStep() {
            dispatch(advanceStep());
        },

        randomizeBoard() {
            dispatch(randomizeBoard());
        },

        clearBoard() {
            dispatch(clearBoard());
        }
    }
};

export const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

