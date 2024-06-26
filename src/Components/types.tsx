export type IconType = Array<string | [string, string]>

export interface HistoryPageData {
    id: string,
    age: string,
    title: string,
    path: string,
}

export interface ProductPageData {
    id: string,
    imgUrl: string,
    title: string,
    caption: string,
    path: string,
    genre: string,
    techStack: IconType,
    created: string,
}

export interface FavoritePageData {
    id: string,
    title: string,
    caption: string,
    path: string,
    genre: string,
    published: string,
}

export interface InfluencedPageData {
    id: string,
    title: string,
    caption: string,
    path: string,
    genre: string,
    published: string,
}
