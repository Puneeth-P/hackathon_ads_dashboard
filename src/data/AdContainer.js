import Dashboard from '../views/Dashboard';
import Ad from '../views/Pages/Ad'
import {Container} from 'flux/utils';
import AdStore from './AdStore';
import Actions from './AdActions'

function getStores() {
    return [
        AdStore,
    ];
}

function getState() {
    return {
        ad: AdStore.getState(),
        onSaveAdId : Actions.saveAdId
    };
}

export default Container.createFunctional(Dashboard, getStores(), getState())
export default Container.createFunctional(Ad, getStores(), getState())