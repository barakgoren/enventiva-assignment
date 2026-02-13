import React from "react";
import { SerializedArtist } from "types";
import { ArtistCard } from "components/ArtistCard";
import { ArtistSkeletonGrid } from "components/ArtistSkeletonGrid";
import { Card } from "components/ui/card";
import { useNavigate } from "react-router-dom";

type SearchResultsSectionProps = {
  artists?: SerializedArtist[];
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
  const nav = useNavigate();
  const hasResults = artists && artists.length > 0;

  return (
    <section className="space-y-4">
      {!!query && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Showing results for{" "}
            <span className="font-semibold text-foreground">{query}</span>
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
          <p className="text-base font-medium text-foreground">
            Start exploring
          </p>
          <p className="text-sm">
            Search for an artist to see cards with their image, genre, country
            and biography preview.
          </p>
        </Card>
      )}

      {isFetching && !errorMessage && <ArtistSkeletonGrid />}

      {!isFetching && hasResults && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              onSeeMore={() => {
                nav(`/artist/${artist.id}`);
              }}
            />
          ))}
        </div>
      )}

      {!isFetching && !hasResults && !errorMessage && !!query && (
        <Card className="bg-muted/50 text-center text-muted-foreground border-none shadow-none">
          <p className="text-base font-medium text-foreground">
            No artists found
          </p>
          <p className="text-sm">
            Try a different spelling or another artist name.
          </p>
        </Card>
      )}
    </section>
  );
}
