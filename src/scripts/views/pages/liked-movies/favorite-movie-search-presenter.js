const _showFoundMovies = (movies) => {
  this._view.showMovies(movies);
};

class FavoriteMovieSearchPresenter {
  constructor({ favoriteMovies, view }) {
    this._favoriteMovies = favoriteMovies;
    this._view = view;
 
    this._listenToSearchRequestByUser();
  }
 
  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchMovies(latestQuery);
    });
  }
 
  async _searchMovies(latestQuery) {
    this._latestQuery = latestQuery.trim();
 
    let foundMovies;
    if (this.latestQuery.length > 0) {
      foundMovies = await this._favoriteMovies.searchMovies(this.latestQuery);
    } else {
      foundMovies = await this._favoriteMovies.getAllMovies();
    }
 
    _showFoundMovies(movies) {
      this._view.showFavoriteMovies(movies);
    }
  }
 
  get latestQuery() {
    return this._latestQuery;
  }
}
 
export default FavoriteMovieSearchPresenter;
