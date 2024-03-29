export interface IArticleSearchResponse {
  status: string;
  response: IArticleSearchResult;
}

export interface IArticleSearchResult {
  docs: IArticle[];
  meta: {
    hits: number;
    offset: number;
    time: number;
  };
}

export interface IArticle {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: IArticleMultimedia[];
  headline: {
    main: string;
    kicker?: string;
  };
  pub_date: string;
  document_type: string;
  news_desk?: string;
  section_name?: string;
  byline: {
    original: string;
    person: IArticleBylinePerson[];
  };
  keywords: IKeyword[];
}

export interface IKeyword {
  value: string;
}

export interface IArticleMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption?: string;
}

export interface IArticleBylinePerson {
  firstname: string;
  middlename?: string;
  lastname: string;
  qualifier?: string;
  title?: string;
  role?: string;
}

export interface IMostPopularResponse {
  status: string;
  copyright: string;
  num_results: number;
  results: IMostPopularArticle[];
}

export interface IMostPopularArticle {
  url: string;
  urI: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: [];
  media: IMedia[];
  eta_id: number;
}

export interface IMedia {
  type: string;
  subtitle: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": IMediaMetadata[];
}

export interface IMediaMetadata {
  url: string;
  format: string;
  height: number;
  width: number;
}

export interface IMovieReviewResponse {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: IMovieReview[];
}

export interface IMovieReview {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  byline: boolean;
  headline: string;
  summary_short: string;
  publication_date: string;
  date_updated: string;
  link: {
    type: string;
    url: string;
    suggested_link_text: string;
  };
  multimedia: {
    type: string;
    src: string;
    height: number;
    weight: number;
  };
}

export interface ITopStoriesResponse {
  status: string;
  copyright: string;
  has_more: boolean;
  num_results: number;
  results: ITopStrory[];
}

export interface ITopStrory {
  abstract: string;
  byline: string;
  created_date: string;
  des_facet: string[];
  geo_facet: string[];
  item_type: string;
  kicker: string;
  material_type_facet: string;
  multimedia: ITopStoryMultimedia[];
  org_facet: string[];
  per_facet: string[];
  published_date: string;
  section: string;
  short_url: string;
  subsection: string;
  title: string;
  updated_date: string;
  uri: string;
  url: string;
}

export interface ITopStoryMultimedia {
  caption: string;
  copyright: string;
  format: string;
  height: number;
  width: number;
  subtype: string;
  type: string;
  url: string;
}
