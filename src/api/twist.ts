interface GUID {
    ispermalink: string;
    text: string;
}

export interface TwistEpisodeItem {
    title: string;
    itemDescription: string;
    link: string;
    guid: GUID;
    pubdate: string;
    "anime:title": string;
    "episode:number": number;
    "animetwist:id": number;
    "kitsu:id"?: number;
    "mal:id"?: number;
}

export interface TwistAnimeItem {
    title: string;
    itemDescription: string;
    link: string;
    guid: GUID;
    pubdate: string;
    "anime:title": string;
    "anime:ongoing": number;
    "animetwist:slug": string;
    "animetwist:id": number;
    "kitsu:id"?: number;
    "mal:id"?: number;
}

export interface TwistFeed {
    items: [TwistAnimeItem];
}

export interface TwistEp {
    items: [TwistEpisodeItem];
}

export interface ITwist {
    getAll: () => Promise<TwistFeed | null>;
    get: (kitsuID: number) => Promise<TwistEp | null>;
    getSource: () => Promise<void>;
}

/**
 * Twist API Wrapper for RSS // TODO: Make use of twist.moe/api instead.
 * Currently only designed to fetch anime data. User functionality and etc. not yet implemented.
 */
class Twist implements ITwist {
    FeedURL = "https://twist.moe/feed/anime?format=json";
    EpURL = "https://twist.moe/feed/episodes?format=json&kitsuId=";
    /**
     * Get TwistFeed with TwistAnimeItem
     */
    getAll = async () => {
        try {
            const res = await fetch(this.FeedURL);
            const {items} = await res.json();
            return {items} as TwistFeed;
        } catch (e) {
            console.error(`[Twist] ${e}`);
            return null;
        }
    };
    /**
     * Get a list of TwistEp of a TwistAnimeItem
     * @param kitsuID
     */
    get = async (kitsuID: number) => {
        try {
            const res = await fetch(this.EpURL + kitsuID);
            const {items} = await res.json();
            return {items} as TwistEp;
        } catch (e) {
            console.error(`[Twist] ${e}`);
            return null;
        }
    };
    // TODO: Add method for fetching media
    getSource = async () => {

    };
}

export default Twist;
