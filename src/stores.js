import Dispatcher from './dispatcher'
import {EventEmitter} from 'events'

let Store = Object.assign({}, EventEmitter.prototype, {
    state: {
        items: []
    },
    getGenre: function () {
        return this.state.items;
    },
    setGenreList: function (data) {
        this.state.items.push(...data);
        this.emit('LOAD_GENRES')
    },
    addGenreListener(callback) {
        this.addListener('LOAD_GENRES', callback)
    },
    removeGenreListener(callback) {
        this.removeListener('LOAD_GENRES', callback)
    }
})
Dispatcher.register(function (payload) {
    Store.setGenreList(payload.genre);
});
export default Store
