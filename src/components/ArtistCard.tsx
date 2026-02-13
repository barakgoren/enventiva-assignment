import React from "react";
import { Card, CardContent } from "components/ui/card";
import { SerializedArtist } from "types";

type ArtistCardProps = {
  artist: SerializedArtist;
  onSeeMore?: (artist: SerializedArtist) => void;
};

export function ArtistCard({ artist, onSeeMore }: ArtistCardProps) {
  const image =
    artist.images.thumb || artist.images.banner || artist.images.fanart || null;
  const fallbackInitial = artist.name.charAt(0).toUpperCase();

  return (
    <Card className="card-hover group relative flex h-full flex-col overflow-hidden transition-all duration-150">
      <div className="relative h-44 w-full bg-muted">
        {image ? (
          <img
            src={image}
            alt={artist.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/40 text-3xl font-bold text-foreground/70">
            {fallbackInitial}
          </div>
        )}
        {artist.genre && (
          <span className="absolute left-3 top-3 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground shadow">
            {artist.genre}
          </span>
        )}
      </div>

      <CardContent className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground">
            {artist.name}
          </h3>
          {artist.country && (
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {artist.country}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {artist && (
            <span className="rounded-full border border-border/80 px-3 py-1">
              Since {artist.formedYear}
            </span>
          )}
        </div>

        <p className="text-sm text-muted-foreground">
          {truncate(artist.bio.en ?? "Biography not available yet.", 220)}
        </p>
      </CardContent>

      <button
        type="button"
        onClick={() => onSeeMore?.(artist)}
        className="absolute inset-0 flex items-center justify-center bg-foreground/60 text-primary-foreground text-sm font-semibold tracking-wide uppercase opacity-0 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group-hover:opacity-100"
      >
        See more
      </button>
    </Card>
  );
}

function truncate(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}
