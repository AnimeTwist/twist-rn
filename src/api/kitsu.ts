/**
 * Bunch of types for Kitsu-related programming.
 */

export interface KitsuMediaAnimeCollectionResponse {
    data: Data[];
}

export interface Data {
    id: string;
    type: TypeEnum;
    links: DataLinks;
    attributes: Attributes;
    relationships: { [key: string]: Relationship };
}

export interface Attributes {
    createdAt: Date;
    updatedAt: Date;
    slug: string;
    synopsis: string;
    coverImageTopOffset: number;
    titles: Titles;
    canonicalTitle: string;
    abbreviatedTitles: string[] | null;
    averageRating: string;
    ratingFrequencies: { [key: string]: string };
    userCount: number;
    favoritesCount: number;
    startDate: Date;
    endDate: Date | null;
    nextRelease: Date | null;
    popularityRank: number;
    ratingRank: number;
    ageRating: AgeRating;
    ageRatingGuide: AgeRatingGuide;
    subtype: ShowTypeEnum;
    status: Status;
    tba: string;
    posterImage: PosterImage;
    coverImage: CoverImage;
    episodeCount: number | null;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    showType: ShowTypeEnum;
    nsfw: boolean;
}

export enum AgeRating {
    PG = "PG",
    R = "R",
}

export enum AgeRatingGuide {
    Teens13OrOlder = "Teens 13 or older",
    The17ViolenceProfanity = "17+ (violence & profanity)",
    ViolenceProfanity = "Violence, Profanity",
}

export interface CoverImage {
    tiny: string;
    small: string;
    large: string;
    original: string;
    meta: CoverImageMeta;
}

export interface CoverImageMeta {
    dimensions: PurpleDimensions;
}

export interface PurpleDimensions {
    tiny: Large;
    small: Large;
    large: Large;
}

export interface Large {
    width: number | null;
    height: number | null;
}

export interface PosterImage {
    tiny: string;
    small: string;
    medium: string;
    large: string;
    original: string;
    meta: PosterImageMeta;
}

export interface PosterImageMeta {
    dimensions: FluffyDimensions;
}

export interface FluffyDimensions {
    tiny: Large;
    small: Large;
    medium: Large;
    large: Large;
}

export enum ShowTypeEnum {
    Tv = "TV",
}

export enum Status {
    Current = "current",
    Finished = "finished",
}

export interface Titles {
    en?: string;
    en_jp: string;
    ja_jp: string;
    en_us?: string;
}

export interface DataLinks {
    self: string;
}

export interface Relationship {
    links: RelationshipLinks;
}

export interface RelationshipLinks {
    self: string;
    related: string;
}

export enum TypeEnum {
    Anime = "anime",
}