import {EventEmitter} from 'events';
import dispatcher from '../dispatchers/Dispatcher'


const ACT_GETALLCITIES = 'GETALLCITIES';

class Store extends EventEmitter {
    constructor() {
        super();

        this.data = {
            cities: [],
        };

        this._actionMap = {
            [ACT_GETALLCITIES]: this._getAllCities.bind(this),
        };
    }

    _getAllCities(actionData) {
        this.data.cities = [...actionData];
        this.emit('change');
    }

    getCities() {
        return this.data.cities;
    }

    handleActions(action) {
        this._actionMap[action.type] && this._actionMap[action.type](action.data);
    }
}

const store = new Store();
const StoreToken = dispatcher.register(store.handleActions.bind(store));
const getStoreToken = () => StoreToken;

export {getStoreToken};
export default store;