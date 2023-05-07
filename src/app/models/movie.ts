export interface Movie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language : string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path:string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface MovieDTO{
    page : number,
    results : Movie[],
    total_results : number,
    total_pages : number
}

export interface MovieDetail{
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget:number,
    genres:[],
    homepage:string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    production_companies: ProductionDTO[],
    production_countries: ProductionCountriesDTO [],
    release_date: number,
    revenue: number,
    runtime: number,
    spoken_languages: ProductionCountriesDTO [],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface ProductionDTO{
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}

export interface ProductionCountriesDTO{
    english_name: string,
    iso_3166_1: string,
    name: string
}