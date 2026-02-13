import React from "react";
import { Card, CardContent } from "components/ui/card";
import { Skeleton } from "components/ui/skeleton";

export function ArtistSkeletonGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="h-full overflow-hidden">
          <Skeleton className="h-44 w-full" />
          <CardContent className="space-y-3 p-4">
            <Skeleton className="h-5 w-3/5" />
            <Skeleton className="h-4 w-2/5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-10 w-full" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
