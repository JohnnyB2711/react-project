import Dispatcher from './dispatcher'
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
let ListStore = {

    items: [],
    getAll: function () {
        return this.items;
    }

}
Dispatcher.register(function (payload) {
    ListStore.items.push(payload.item);
    return true; // Needed for Flux promise resolution
});
