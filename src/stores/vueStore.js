export default class {

    _get = require('lodash/get');
    _set = require('lodash/set');
    _unset = require('lodash/unset');

    constructor(app) {
        this.store = app.data;
    }

    /**
     * Gets value of data object property
     * 
     * @param {string} path // Can accept dot or bracket notated paths
     */
    get(path) {
        return this._get(this.store, path, null);
    }

    /**
     * Sets value of data object property
     * 
     * @param {string} path // Can accept dot or bracket notated paths
     * @param {*} value 
     */
    set(path, value) {
        return this._set(this.store, path, value);
    }

    /**
     * Deletes value of data object property
     * 
     * @param {string} path 
     */
    delete(path) {
        return this._unset(this.store, path);
    }
}