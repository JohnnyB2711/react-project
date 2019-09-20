import Dispatcher from './dispatcher'
import {EventEmitter} from 'events'

let Store = Object.assign({}, EventEmitter.prototype, {
    state: {
        items: [],
        films: {}
    },
    getMovies: function () {
        return this.state.films;
    },
    setMovieList: function (data) {
        this.state.films = data;
        this.emit('LOAD_SELECTED_FILMS')
    },
    addFilmsListener(callback) {
        this.addListener('LOAD_SELECTED_FILMS', callback)
    },
    removeFilmsListener(callback) {
        this.removeListener('LOAD_SELECTED_FILMS', callback)
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
});
Dispatcher.register(function (payload) {
    switch (payload.action) {
        case 'LOAD_GENRES':
            Store.setGenreList(payload.genre);
            break;
        case 'LOAD_SELECTED_FILMS':
            Store.setMovieList(payload.films);
    }
});
export default Store
