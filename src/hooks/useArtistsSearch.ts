import { useQuery } from "@tanstack/react-query";
import { AudioDBService } from "services/audio-db.service";
import { ApiError } from "services/http.service";
import { ArtistSearchResponse } from "types";

export function useArtistsSearch(query: string) {
  return useQuery<ArtistSearchResponse, ApiError>({
    queryKey: ["artists", "search", query],
    queryFn: () => AudioDBService.searchArtist(query),
    enabled: query.trim().length > 0,
    retry: 1,
    placeholderData: (prev) => prev,
  });
}
