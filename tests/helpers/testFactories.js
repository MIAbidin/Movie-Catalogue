import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteMovieIdb from '../../src/scripts/data/favorite-movie-idb';
 
const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavoriteMovieIdb,
    movie,
  });
};
 
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithMovie };
