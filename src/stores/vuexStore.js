export default class {

    _get = require('lodash/get');

    constructor(store) {
        this.store = store;
    }

    /**
     * Retrieves an item from the store
     * 
     * Vuex prefers you to use getters to retrieve values
     * 
     * @param {string} mutation 
     * @param {object} payload 
     */
    get(getter) {
        return this.store.getters[getter];
    }

    /**
     * Gets raw value from store instead of using getter (not recommended)
     * 
     * Can access deep object properties using dot or bracket notation
     * 
     * @param {string} path 
     */
    getRaw(path) {
        return this._get(this.store, path, null);
    }

    /**
     * Updates an item within the store
     * 
     * Vuex requires all changes to happen via mutations, 
     * so point to a mutation in your Vuex store and
     * supply a payload
     * 
     * @param {string} mutation 
     * @param {object} payload 
     */
    set(mutation, payload) {
        payload ? this.store.commit(mutation, payload) : this.store.commit(mutation);
    }

    /**
     * Dispatches an action to the store
     * 
     * @param {string} action 
     * @param {object} payload 
     */
    dispatch(action, payload) {
        payload ? this.store.dispatch(action, payload) : this.store.dispatch(action);
    }

    /**
     * Deletes an item from the store
     * 
     * Vuex requires all changes to happen via mutations, 
     * so point to a deletion mutation in your Vuex store
     * 
     * @param {string} mutation 
     * @param {object} payload 
     */
    delete(mutation, payload) {
        // Not implemented
    }
}