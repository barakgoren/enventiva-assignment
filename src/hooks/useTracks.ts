import { useQuery } from "@tanstack/react-query";
import { AudioDBService } from "services/audio-db.service";
import { ApiError } from "services/http.service";
import { SerializedArtist, SerializedTrack } from "types";

export function useArtistTracks(artistId?: string) {
  return useQuery<SerializedTrack[], ApiError>({
    queryKey: ["artists", "topTracks", artistId],
    queryFn: () => AudioDBService.getTopTracks(artistId),
    enabled: !!artistId && artistId.trim().length > 0,
    retry: 1,
    placeholderData: (prev) => prev,
  });
}
