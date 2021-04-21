import Autocomplete from './components/autocomplete.js';


class SpencerAndWilliamsSearch {
  constructor() {
    this._initSearch();
    this._registerEvents();
  }

  _initSearch() {
    this.autocompleteDropdown = new Autocomplete();
  }

  _registerEvents() {
    const autocomplete = document.querySelector('.autocomplete');
    const searchbox = document.querySelector('#searchbox input');

    searchbox.addEventListener('click', () => {
      // autocomplete.style.display = 'block';
      console.log('click');
    });

    searchbox.addEventListener('blur', () => {
      // autocomplete.style.display = 'none';
      console.log('blur')
    });
  }
}

const app = new SpencerAndWilliamsSearch();
