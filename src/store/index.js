import { observable, action } from 'mobx';

import { getAllBreeds, getBreedRandomImage } from '../api';

class BreedStore {
    @observable breeds = null;
    @observable selectedBreed = null;

    @action setBreeds = breeds => this.breeds = { ...breeds };

    @action setSelectedBreed = breed => this.selectedBreed = breed;

    @action getBreeds () {
        getAllBreeds().then( data => this.setBreeds( data.message ) );
    }

    @action getSelectedBreed (breed, subbreed) {
        getBreedRandomImage( breed, subbreed ).then( data => this.setSelectedBreed({
            breedName: subbreed ? `${subbreed} ${breed}` : breed,
            breedImg: data.message 
          }) );
    }
}

const store = new BreedStore();

export default store;