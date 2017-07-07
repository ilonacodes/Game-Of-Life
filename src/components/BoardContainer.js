import {connect} from "react-redux";

import {Board} from "./Board";
import {toggleCell} from "./actions";

const mapStateToProps = state => {
    return {
        board: state.board
    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCell(X, Y) {
            dispatch(toggleCell(X, Y));
        }
    }
};

export const BoardContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

