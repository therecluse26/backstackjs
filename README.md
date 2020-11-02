# Backstack JS

This is the client-side implementation of Backstack that integrates frontend sites with backend Backstack API services

Equipping Jamstack apps with powerful, privacy-focused backend functionality. The goal of Backstack is to empower developers to build Jamstack applications that are just as powerful and flexible as traditional client-server applications without sacrificing user privacy or trust.

We believe that you are the rightful owner of your own data, so in addition to offering this as a service, we're providing this software suite as a totally free and open-source set of tools that you can host yourself.

## Client methods
appInit() - Pulls basic app data from manifest file into localStorage, prompts user to login or register (if no auth token found in localStorage), compares local app data to remote if user logged in

storeMount(type, store) - Mounts local data store. Need to handle different stores such as Redux, Vuex and even native data() stores to various libraries
    - This should bind Backstack methods to JS library methods
    - Should allow custom (non-framework) stores as well, this would just require a file (named store.js) that manually binds Backstack methods to custom store methods
    - Stores to support
        - React -> this.state
        - Redux
        - Vue -> data()
        - Vuex
        - Svelte
        - AngularJS
        - Custom
    - This should be a simple wrapper without any custom functionality. Simply get and set payloads using each store's idiomatic methods.

storeGet(key)
storeSet(payload)

## API methods
authRegister(email, password, password) -> POST /auth/register
authVerify(code) -> POST /auth/verify (post this from the app itself to eliminate need for redirection from Backstack)
authLogin(email, password) -> POST /auth/login
authLogout() -> POST /auth/logout (payload: token)
authForgotPassword(email) -> POST /auth/forgotpassword

appVersion() -> GET /app/{guid}/version (returns app name, schema hash, date of last installed/updated remote version and basic author/repo info, checks against local app)
appGetSchema() -> GET /app/{guid}/schema
appInstall() -> POST /app/{guid}/install (posts manifest to Backstack server)
appUpdate() -> POST /app/{guid}/update (posts manifest to Backstack server)

remoteGet(key) -> GET /app/{guid}/data/get/{key} (updates local state from remote data)
remoteSet(key, value) -> POST /app/{guid}/data/set/{key} (updates remote state from local data)
remotePoll() -> GET /app/{guid}/data/poll (compares remote last_updated timestamp to local last_updated timestamp, pulls remote changes if newer)
