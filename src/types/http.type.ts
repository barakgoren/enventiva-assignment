import { Artist, SerializedArtist, Track } from ".";

export interface ArtistSearchResponse {
  artists: Artist[] | null;
}

export interface TrackSearchResponse {
  track: Track[] | null;
}
