export interface SerializedArtist {
  id: string;
  name: string; // equal to strArtist
  genre: string; // equal to strGenre
  country: string; // equal to strCountry
  formedYear: string | null; // equal to intFormedYear
  bio: {
    en: string | null; // equal to strBiographyEN
    de: string | null; // equal to strBiographyDE
    fr: string | null; // equal to strBiographyFR
    cn: string | null; // equal to strBiographyCN
    it: string | null; // equal to strBiographyIT
    jp: string | null; // equal to strBiographyJP
    ru: string | null; // equal to strBiographyRU
    es: string | null; // equal to strBiographyES
    pt: string | null; // equal to strBiographyPT
    he: string | null; // equal to strBiographyIL
  };
  images: {
    thumb: string | null; // equal to strArtistThumb
    banner: string | null; // equal to strArtistBanner
    fanart: string | null; // equal to strArtistFanart
    logo: string | null; // equal to strArtistLogo
  };
}

export interface Artist {
  idArtist: string;
  strArtist: string;
  strArtistStripped: string | null;
  strArtistAlternate: string | null;
  strLabel: string | null;
  idLabel: string | null;
  intFormedYear: string | null;
  intBornYear: string | null;
  intDiedYear: string | null;
  strDisbanded: string | null;
  strStyle: string | null;
  strGenre: string | null;
  strMood: string | null;
  strWebsite: string | null;
  strFacebook: string | null;
  strTwitter: string | null;
  strBiographyEN: string | null;
  strBiographyDE: string | null;
  strBiographyFR: string | null;
  strBiographyCN: string | null;
  strBiographyIT: string | null;
  strBiographyJP: string | null;
  strBiographyRU: string | null;
  strBiographyES: string | null;
  strBiographyPT: string | null;
  strBiographySE: string | null;
  strBiographyNL: string | null;
  strBiographyHU: string | null;
  strBiographyNO: string | null;
  strBiographyIL: string | null;
  strBiographyPL: string | null;
  strGender: string | null;
  intMembers: string | null;
  strCountry: string | null;
  strCountryCode: string | null;
  strArtistThumb: string | null;
  strArtistLogo: string | null;
  strArtistCutout: string | null;
  strArtistClearart: string | null;
  strArtistWideThumb: string | null;
  strArtistFanart: string | null;
  strArtistFanart2: string | null;
  strArtistFanart3: string | null;
  strArtistFanart4: string | null;
  strArtistBanner: string | null;
  strMusicBrainzID: string | null;
  strISNIcode: string | null;
  strLastFMChart: string | null;
  intCharted: string | null;
  strLocked: string | null;
}
export interface SerializedTrack {
  id: string;
  albumId: string;
  artistId: string;
  name: string;
  albumName: string;
  artistName: string;
  duration: number;
  genre: string;
  musicVideoUrl: string;
  musicVideoViews: number;
  musicVideoLikes: number;
  description: string;
  thumbnailUrl: string;
}

export interface Track {
  idTrack: string;
  idAlbum: string;
  idArtist: string;
  strTrack: string;
  strAlbum: string;
  strArtist: string;
  intDuration: string;
  strGenre: string;
  strMusicVid: string;
  intMusicVidViews: string;
  intMusicVidLikes: string;
  strDescriptionEN: string;
  strTrackThumb: string;
}
