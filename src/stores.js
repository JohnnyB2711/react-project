import Dispatcher from './dispatcher'
//let Dispatcher = require('./dispatcher');
/*import React from 'react'
class GenreStore extends React.Component{
    constructor(){
        super()
        this.genres=[]
    }
    getAll(){
        return this.genres
    }
}
const genreStore = new GenreStore();
export default genreStore*/
let Store = {
    items: [],
    getGenre: function () {
        return this.items;
    },
    addGenre: function (payload) {
        this.items.push(payload.genre)
    }
}
Dispatcher.register(function (payload) {
    switch (payload.action) {
        case 'LOAD_GENRE':
            Store.addGenre();
    }

    return true; // Needed for Flux promise resolution
});

export default Store
