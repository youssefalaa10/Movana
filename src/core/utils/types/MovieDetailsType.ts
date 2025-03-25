export interface MovieDetailsType {
    id: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    tagline: string;
    vote_average: number;
    release_date: string;
    runtime: number;
    overview: string;
    genres: { id: number; name: string }[];
    origin_country: string[];
    trailerKey: string;
    movieCast: { id: number; name: string; character: string; profile_path: string }[]; 
  }
  