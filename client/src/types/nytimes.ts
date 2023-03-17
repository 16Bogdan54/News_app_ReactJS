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