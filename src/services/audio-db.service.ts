import { ArtistSearchResponse } from "types";
import { HttpService } from "./http.service";

export class AudioDBService {
  static async searchArtist(artistName: string): Promise<ArtistSearchResponse> {
    const endpoint = `/search.php?s=${encodeURIComponent(artistName)}`;
    const artists = await HttpService.get<ArtistSearchResponse>(endpoint);
    console.log({ artists });
    return artists;
  }
}
