// TheAudioDB API response types
export interface Artist {
  idArtist: string;
  strArtist: string;
  strArtistThumb: string | null;
  strArtistLogo: string | null;
  strArtistBanner: string | null;
  strArtistFanart: string | null;
  strBiographyEN: string | null;
  strGenre: string | null;
  strCountry: string | null;
  intFormedYear: string | null;
  strWebsite: string | null;
  strFacebook: string | null;
  strTwitter: string | null;
  strStyle: string | null;
}

export interface Track {
  idTrack: string;
  strTrack: string;
  strAlbum: string | null;
  intDuration: string | null;
  strTrackThumb: string | null;
  intTrackNumber: string | null;
}

export interface ArtistSearchResponse {
  artists: Artist[] | null;
}

export interface TopTracksResponse {
  track: Track[] | null;
}