import Dispatcher from './dispatcher'
import { EventEmitter } from 'events'

let Store =  Object.assign({}, EventEmitter.prototype, {
    state:{
        items: []
    },
    getGenre: function () {
        return this.state.items;
    },
    setGenreList: function (data) {
        this.state.items.push(...data);
        this.emit('LOAD_GENRES')
    },
    addGenreListener (callback) {
        this.addListener('LOAD_GENRES', callback)
    },
    removeGenreListener (callback) {
        this.removeListener('LOAD_GENRES', callback)
    }
})
Dispatcher.register(function (payload) {
    switch (payload.action) {
        case 'LOAD_GENRE':
            Store.setGenreList(payload.genre);
    }
});
//console.log(Store.state.items)
export default Store
