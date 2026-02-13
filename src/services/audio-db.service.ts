import { ArtistSearchResponse, TrackSearchResponse } from "@/types/http.type";
import { HttpService } from "./http.service";
import { Artist, SerializedArtist, SerializedTrack, Track } from "@/types";
import { safeParseInt } from "lib/utils";

export class AudioDBService {
  private static serializeArtist(artist: Artist): SerializedArtist {
    return {
      id: artist.idArtist,
      name: artist.strArtist,
      genre: artist.strGenre || "Unknown genre",
      country: artist.strCountry || "Unknown country",
      formedYear: artist.intFormedYear,
      bio: {
        en: artist.strBiographyEN,
        de: artist.strBiographyDE,
        cn: artist.strBiographyCN,
        jp: artist.strBiographyJP,
        ru: artist.strBiographyRU,
        es: artist.strBiographyES,
        fr: artist.strBiographyFR,
        he: artist.strBiographyIL,
        it: artist.strBiographyIT,
        pt: artist.strBiographyPT,
      },
      images: {
        thumb: artist.strArtistThumb,
        banner: artist.strArtistBanner,
        fanart: artist.strArtistFanart,
        logo: artist.strArtistLogo,
      },
    };
  }

  private static serializeTrack(track: Track): SerializedTrack {
    return {
      id: track.idTrack,
      artistId: track.idArtist,
      artistName: track.strArtist,
      name: track.strTrack,
      albumId: track.idAlbum,
      albumName: track.strAlbum,
      genre: track.strGenre,
      description: track.strDescriptionEN,
      musicVideoUrl: track.strMusicVid,
      thumbnailUrl: track.strTrackThumb,
      duration: safeParseInt(track.intDuration),
      musicVideoLikes: safeParseInt(track.intMusicVidLikes),
      musicVideoViews: safeParseInt(track.intMusicVidViews),
    };
  }

  static async searchArtist(artistName: string): Promise<SerializedArtist[]> {
    const endpoint = `/search.php?s=${encodeURIComponent(artistName)}`;
    const artists = await HttpService.get<ArtistSearchResponse>(endpoint);
    if (!artists || !artists.artists) {
      return [];
    }
    return artists.artists.map(this.serializeArtist);
  }

  static async getArtistDetails(
    artistId: string,
  ): Promise<SerializedArtist | undefined> {
    const endpoint = `/artist.php?i=${encodeURIComponent(artistId)}`;
    const artists = await HttpService.get<ArtistSearchResponse>(endpoint);
    if (!artists || !artists.artists || artists.artists.length === 0) {
      return undefined;
    }
    return this.serializeArtist(artists.artists[0]);
  }

  static async getTopTracks(artistId?: string): Promise<SerializedTrack[]> {
    if (!artistId) {
      console.warn("getTopTracks called without artistId");
      return [];
    }
    const endpoint = `/track-top10.php?s=${encodeURIComponent(artistId)}`;
    const tracks = await HttpService.get<TrackSearchResponse>(endpoint);
    if (!tracks || !tracks.track) {
      return [];
    }
    return tracks.track.map(this.serializeTrack);
  }
}
