import ActionTypes from './AdActionTypes';
import Dispatcher from './AdDispatcher';

const Actions = {
    saveAdId(id) {
        Dispatcher.dispatch({
            type: ActionTypes.SAVE_AD_ID,
            id,
        });
    },
};

export default Actions;