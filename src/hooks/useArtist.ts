import { useQuery } from "@tanstack/react-query";
import { AudioDBService } from "services/audio-db.service";
import { ApiError } from "services/http.service";
import { SerializedArtist } from "types";

export function useArtist(id: string) {
  return useQuery<SerializedArtist | undefined, ApiError>({
    queryKey: ["artists", "details", id],
    queryFn: () => AudioDBService.getArtistDetails(id),
    enabled: id.trim().length > 0,
    retry: 1,
    placeholderData: (prev) => prev,
  });
}
