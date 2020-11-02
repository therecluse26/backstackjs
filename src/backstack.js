export default class Backstack {

    // Class properties
    auth = {
        expires = 2592000000,
        timestamp,
        token
    }
    backstack_endpoint;
    manifest = {
        name,
        guid,
        last_updated,
    }
    store;
    store_type;

    constructor(store_type, store) {
        this.state.store_type = store_type;
        this.loadManifest();
        this.loadLocalStorage();
        this.init(store);
    }

    /**
     * Initializes application on load
     */
    init(store) {
        if (this.checkLogin()) {
            this.checkAppVersion()
                .then(() => {
                    this.storeBind(store);
                    this.manifest.updates = null;
                })
                .catch(() => {

                });
        } else {
            this.presentLoginModal();
        }
    }

    async loadManifest() {
        this.manifest = null;
    }

    checkLogin() {
        // Use Auth0 library to deal with login tokens
        const authExpired = (Date.now() - this.auth.timestamp) < this.auth.expires;
        if (this.auth.token && !authExpired) {

        }
        return true
    }

    presentLoginModal() {

    }

    /**
     * Checks application versions between local and remote
     */
    async checkAppVersion() {
        const local = getLocalAppVersion();
        const remote = await getRemoteAppVersion();
        return local.app.guid == remote.app.guid;
    }


    getLocalAppVersion() {
        return this.manifest.guid;
    }

    getRemoteAppVersion() {
        return;
    }

    storeBind(store) {
        switch (this.storeType) {
            case "react":
                this.store = import('./stores/reactStore')(store)
                break;
            case "redux":
                this.store = import('./stores/reduxStore')(store)
                break;
            case "vue":
                this.store = import('./stores/vueStore')(store)
                break;
            case "vuex":
                this.store = import('./stores/vuexStore')(store)
                break;
            case "svelte":
                this.store = import('./stores/svelteStore')(store)
                break;
            case "angular":
                this.store = import('./stores/angularStore')(store)
                break;
            default:
                this.store = import('./stores/customStore')(store)
        }
    }



}