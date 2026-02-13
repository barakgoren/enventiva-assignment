import React from "react";
import { Artist } from "types";
import { ArtistCard } from "components/ArtistCard";
import { ArtistSkeletonGrid } from "components/ArtistSkeletonGrid";
import { Card } from "components/ui/card";

type SearchResultsSectionProps = {
  artists: Artist[];
  query: string;
  isFetching: boolean;
  errorMessage: string | null;
};

export function SearchResultsSection({
  artists,
  query,
  isFetching,
  errorMessage,
}: SearchResultsSectionProps) {
  const hasResults = artists.length > 0;

  return (
    <section className="space-y-4">
      {!!query && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing results for <span className="font-semibold text-foreground">{query}</span>
          </span>
          {isFetching && <span className="animate-pulse">Updating...</span>}
        </div>
      )}

      {errorMessage && (
        <Card className="border-destructive/30 bg-destructive/5 p-4 text-destructive">
          <p className="font-semibold">Could not load artists</p>
          <p className="text-sm">{errorMessage}</p>
        </Card>
      )}

      {(!query || query.trim().length === 0) && (
        <Card className="bg-muted/50 text-center text-muted-foreground border-none shadow-none">
          <p className="text-base font-medium text-foreground">Start exploring</p>
          <p className="text-sm">
            Search for an artist to see cards with their image, genre, country and biography preview.
          </p>
        </Card>
      )}

      {isFetching && !errorMessage && <ArtistSkeletonGrid />}

      {!isFetching && hasResults && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard key={artist.idArtist} artist={artist} />
          ))}
        </div>
      )}

      {!isFetching && !hasResults && !errorMessage && !!query && (
        <Card className="bg-muted/50 text-center text-muted-foreground border-none shadow-none">
          <p className="text-base font-medium text-foreground">No artists found</p>
          <p className="text-sm">Try a different spelling or another artist name.</p>
        </Card>
      )}
    </section>
  );
}
