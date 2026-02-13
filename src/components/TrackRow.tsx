import { fmt, fmtN } from "lib/utils";
import { SerializedTrack } from "@/types";
import { Clock, Disc3, Eye, Play, ThumbsUp } from "lucide-react";
import React from "react";

interface TrackRowProps {
  track: SerializedTrack;
  index: number;
}

export default function TrackRow({ track, index }: TrackRowProps) {
  const musicVideoUrl = track.musicVideoUrl;
  const hasMusicVideo = !!musicVideoUrl && musicVideoUrl.trim().length > 0;
  return (
    <div className="group flex items-center gap-4 rounded-xl px-4 py-3 transition-colors hover:bg-muted/60">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center">
        <span data-hasurl={hasMusicVideo} className="text-sm font-semibold text-muted-foreground group-hover:data-[hasurl=true]:hidden">
          {index + 1}
        </span>
        <Play data-hasurl={hasMusicVideo} className="hidden h-4 w-4 text-primary group-hover:data-[hasurl=true]:block" />
      </div>
      {track.thumbnailUrl ? (
        <img
          src={track.thumbnailUrl}
          alt={track.name}
          className="h-12 w-12 shrink-0 rounded-lg object-cover shadow"
        />
      ) : (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-muted">
          <Disc3 className="h-5 w-5 text-muted-foreground" />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-sm font-semibold text-foreground">
          {track.name}
        </span>
        <span className="truncate text-xs text-muted-foreground">
          {track.albumName}
          {track.genre ? ` · ${track.genre}` : ""}
        </span>
      </div>
      <div className="hidden items-center gap-4 text-xs text-muted-foreground sm:flex">
        {track.musicVideoViews > 0 && (
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {fmtN(track.musicVideoViews)}
          </span>
        )}
        {track.musicVideoLikes > 0 && (
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-3.5 w-3.5" />
            {fmtN(track.musicVideoLikes)}
          </span>
        )}
      </div>
      <span className="flex items-center gap-1 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" />
        {fmt(track.duration)}
      </span>
      {musicVideoUrl && (
        <a
          href={musicVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Watch music video"
          className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
        >
          <Play className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
