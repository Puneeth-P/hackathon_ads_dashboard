import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from './AdActionTypes';
import Dispatcher from './AdDispatcher';
import Ad from './Ad';

class AdStore extends ReduceStore {
    constructor() {
        super(Dispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.SAVE_AD_ID:
                // Do nothing for now, we will add logic here soon!
                if (!action.id) {
                    return state;
                }
                return state.set({
                    adId : action.id
                });

            default:
                return state;
        }
    }
}

export default new AdStore();