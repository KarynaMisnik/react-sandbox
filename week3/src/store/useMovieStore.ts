import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface StoreState {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<StoreState>((set) => ({
  movies: [
    {id: 1, title: "The Lord of the Rings", watched: true}, 
    {id: 2, title: "Saw", watched: true}, 
    {id:3, title: "The Shining", watched: false}, 
    {id:4, title: "Suspiria", watched: true}, 
    {id:5, title: "Titanic", watched: false},],
  
  toggleWatched: (id) => 
    set((state) => ({
    movies: state.movies.map((movie) =>
        movie.id === id ? {...movie, watched: !movie.watched}:movie
)
  })),
}));