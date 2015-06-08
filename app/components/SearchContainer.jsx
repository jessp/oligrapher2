var BaseComponent = require('./BaseComponent');
var SearchForm = require('./SearchForm');
var SearchResults = require('./SearchResults');

class SearchContainer extends BaseComponent {
  constructor(){
    super();
    this.displayName = 'SearchContainer';
  }
  render(){
    return (
      <div className="searchContainer">
        <SearchForm />
        <SearchResults addNode={this.props.addNode} />
      </div>
    );
  }
}

module.exports = SearchContainer;