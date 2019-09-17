import Dispatcher from './dispatcher'
import {EventEmitter} from 'events'
import {Switch} from "react-router";

let Store = Object.assign({}, EventEmitter.prototype, {
    state: {
        items: [],
        planedFilms: [],
        viewedFilms: [],
        films:[]
    },
    getPlannedFilms: function () {
        return this.state.planedFilms;
    },
/*    getFilms: function () {
        return this.state.films;
    },*/
    getViewedFilms: function () {
        return this.state.viewedFilms;
    },
    setMovieList: function (data) {
        this.state.planedFilms.push(...data.planned);
        this.state.viewedFilms.push(...data.viewed);
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
        //this.state.viewedFilms.push(...data.planed)
        this.state.films.push(...data);
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
        case 'LOAD_PLANED_AND_VIEWED_FILMS':
            Store.setMovieList(payload.films);
    }
});
export default Store
