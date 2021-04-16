import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { hitTemplate } from "./helpers";

// Instant Search Widgets
import { hits, searchBox, configure, refinementList, index } from 'instantsearch.js/es/widgets';

// Autocomplete Template
import autocompleteProductTemplate from '../templates/autocomplete-product';
import autocompleteSuggestionTemplate from '../templates/suggestion-template';

/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */
class Autocomplete {
  /**
   * @constructor
   */
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      '0MKVCO6YDU',
      '4539771665517b84023e9077034bf98a'
    );

    this._searchInstance = instantsearch({
      indexName: 'test_INDEX',
      searchClient: this._searchClient,
    });
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      configure({
        hitsPerPage: 6,
      }),
      searchBox({
        container: '#searchbox',
        placeholder: "Search for products"
      }),
      hits({
        container: '#autocomplete-hits',
        templates: { item: autocompleteProductTemplate }
          // empty: "No results.",

          // function(hit) {
          //   return hitTemplate(hit);
          // }
        // { item: autocompleteProductTemplate }
      }),
      // index({
      //   indexName: 'test_INDEX_query_suggestions'
      // }).addWidgets([
      //   hits({
      //     container: '#autocomplete-suggestion-hits',
      //     templates:
      //       { item: autocompleteSuggestionTemplate },
      //       // { item:
      //       //   '{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}'
      //       // },
      //   }),
      //   configure({
      //     hitsPerPage: 4,
      //   }),
      // ]),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
    // console.log('startSearch');
  }
}

export default Autocomplete;
