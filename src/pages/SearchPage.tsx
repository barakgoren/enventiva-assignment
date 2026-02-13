import React, { useMemo, useState } from "react";
import { SearchFormCard } from "components/SearchFormCard";
import { SearchResultsSection } from "components/SearchResultsSection";
import { useArtistsSearch } from "hooks/useArtistsSearch";
import { Artist } from "types";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

  const { data, isLoading, isFetching, isError, error } =
    useArtistsSearch(query);

  const artists = useMemo(() => {
    if (!data || !data.artists) return [];
    return data.artists as Artist[];
  }, [data]);

  const errorMessage = useMemo(() => {
    if (!isError) return null;
    return error?.message ?? "Something went wrong";
  }, [error, isError]);

  function handleSearch(term: string) {
    setSearchTerm(term);
    setQuery(term);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-8">
        <SearchFormCard
          value={searchTerm}
          onChange={setSearchTerm}
          onSubmit={handleSearch}
          isSearching={isFetching}
        />

        <SearchResultsSection
          artists={artists}
          query={query}
          isFetching={isFetching || isLoading}
          errorMessage={errorMessage}
        />
      </div>
    </div>
  );
}
