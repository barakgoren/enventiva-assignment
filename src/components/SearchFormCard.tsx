import React from "react";
import { Input } from "components/ui/input";
import { Button } from "components/ui/button";
import { Card, CardContent } from "components/ui/card";

type SearchFormCardProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
  isSearching: boolean;
};

export function SearchFormCard({
  value,
  onChange,
  onSubmit,
  isSearching,
}: SearchFormCardProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSubmit(trimmed);
  }
  const suggestions = [
    "Coldplay",
    "Taylor Swift",
    "Adele",
    "Arctic Monkeys",
    "Daft Punk",
    "Muse",
  ];

  return (
    <Card className="relative overflow-hidden border-border/60 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-transparent" />
      <CardContent className="relative space-y-6 p-6 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-3 md:flex-row"
        >
          <Input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="Search for an artist..."
            className="h-12 text-base md:text-lg"
            autoFocus
          />
          <Button type="submit" className="h-12 px-6 text-base md:w-40">
            {isSearching ? "Searching..." : "Search"}
          </Button>
        </form>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="mr-1 font-medium text-foreground">Try:</span>
          {suggestions.map((item) => (
            <Button
              key={item}
              type="button"
              variant="secondary"
              size="sm"
              className="rounded-full border border-border/70 bg-secondary/70 px-3 py-1 text-sm font-medium text-secondary-foreground transition hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
              onClick={() => onSubmit(item)}
            >
              {item}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
