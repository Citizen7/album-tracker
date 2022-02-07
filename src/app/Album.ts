export interface Album {
    id?: number;
    artist: string;
    album: string;
    date: string;
    highlight: boolean;
    album_art?: string | null;
}