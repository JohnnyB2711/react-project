import Dispatcher from './dispatcher'
import {EventEmitter} from 'events'

let Store = Object.assign({}, EventEmitter.prototype, {
    state: {
        items: [],
        planedFilms: [],
        viewedFilms: [],
        films: {}
    },
    getFilms: function () {
        return this.state.films;
    },
    setMovieList: function (data) {
        this.state.films=data;
/*        this.state.planedFilms.push(...data.planned);
        this.state.viewedFilms.push(...data.viewed);*/
        this.emit('LOAD_FILMS')
    },
    addFilmsListener(callback) {
        this.addListener('LOAD_FILMS', callback)
    },
    removeFilmsListener(callback) {
        this.removeListener('LOAD_FILMS', callback)
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
        case 'LOAD_GENRE':
            Store.setGenreList(payload.genre);
            break;
        case 'LOAD_FILMS':
            Store.setMovieList(payload.films);
    }
});
export default Store
