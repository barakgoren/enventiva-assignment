import { useArtistTracks } from "hooks/useTracks";
import { useArtist } from "hooks/useArtist";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "components/ui/card";
import { Skeleton } from "components/ui/skeleton";
import {
  ArrowLeft,
  Calendar,
  Globe,
  Music,
  ChevronDown,
  ChevronUp,
  Loader2,
} from "lucide-react";
import TrackRow from "components/TrackRow";

type BioKey =
  | "en"
  | "de"
  | "fr"
  | "cn"
  | "it"
  | "jp"
  | "ru"
  | "es"
  | "pt"
  | "he";

const LANGS: { key: BioKey; label: string }[] = [
  { key: "en", label: "English" },
  { key: "de", label: "Deutsch" },
  { key: "fr", label: "Français" },
  { key: "es", label: "Español" },
  { key: "pt", label: "Português" },
  { key: "it", label: "Italiano" },
  { key: "jp", label: "日本語" },
  { key: "cn", label: "中文" },
  { key: "ru", label: "Русский" },
  { key: "he", label: "עברית" },
];

const Pill = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm">
    {icon}
    {label}
  </span>
);

export default function ArtistDetailsPage() {
  const navigate = useNavigate();
  const id = String(useParams().id ?? "");
  const { data: artist, isLoading: loadingArtist } = useArtist(id);
  const {
    data: tracks,
    isLoading: loadingTracks,
    isFetching,
  } = useArtistTracks(artist?.name);
  const [lang, setLang] = useState<BioKey>("en");
  const [bioExpanded, setBioExpanded] = useState(false);

  if (loadingArtist || !artist) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background flex items-center justify-center">
        <div>
          <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
          <span className="ml-2 text-primary animate-pulse">
            Loading artist details...
          </span>
        </div>
      </div>
    );
  }

  const banner = artist.images.banner ?? artist.images.fanart;
  const thumb = artist.images.thumb;
  const availLangs = LANGS.filter((l) => artist.bio[l.key]);
  const activeLang = availLangs.find((l) => l.key === lang)
    ? lang
    : (availLangs[0]?.key ?? "en");
  const bioText = artist.bio[activeLang] ?? "";
  const bioDisplay =
    bioExpanded || bioText.length <= 600
      ? bioText
      : bioText.slice(0, 600) + "…";

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 via-background to-background">
      {/* Hero */}
      <div className="relative h-64 w-full overflow-hidden sm:h-80 md:h-96">
        {banner ? (
          <img
            src={banner}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent/40 to-primary/80" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end gap-6 px-4 pb-8 md:px-8">
          <div className="hidden shrink-0 sm:block">
            {thumb ? (
              <img
                src={thumb}
                alt={artist.name}
                className="h-36 w-36 rounded-2xl border-4 border-background object-cover shadow-2xl md:h-44 md:w-44"
              />
            ) : (
              <div className="flex h-36 w-36 items-center justify-center rounded-2xl border-4 border-background bg-primary/20 text-5xl font-bold text-primary shadow-2xl md:h-44 md:w-44">
                {artist.name[0]}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 pb-1">
            {artist.images.logo && (
              <img
                src={artist.images.logo}
                alt={artist.name}
                className="max-h-16 w-auto object-contain drop-shadow-lg"
              />
            )}
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground drop-shadow-lg sm:text-4xl md:text-5xl">
              {artist.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 pb-20 md:px-8">
        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          {artist.genre && (
            <Pill
              icon={<Music className="h-4 w-4 text-primary" />}
              label={artist.genre}
            />
          )}
          {artist.country && (
            <Pill
              icon={<Globe className="h-4 w-4 text-accent" />}
              label={artist.country}
            />
          )}
          {artist.formedYear && (
            <Pill
              icon={<Calendar className="h-4 w-4 text-warning" />}
              label={`Formed ${artist.formedYear}`}
            />
          )}
        </div>

        {/* Biography */}
        {availLangs.length > 0 && (
          <Card>
            <CardContent className="p-6">
              <h2 className="mb-4 text-xl font-semibold">Biography</h2>
              {availLangs.length > 1 && (
                <div className="mb-4 flex flex-wrap gap-1.5">
                  {availLangs.map((l) => (
                    <button
                      key={l.key}
                      onClick={() => {
                        setLang(l.key);
                        setBioExpanded(false);
                      }}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${activeLang === l.key ? "bg-primary text-primary-foreground shadow" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {bioDisplay}
              </p>
              {bioText.length > 600 && (
                <button
                  onClick={() => setBioExpanded((p) => !p)}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  {bioExpanded ? (
                    <>
                      Show less <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read more <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Top Tracks */}
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">Top Tracks</h2>
            {loadingTracks || isFetching ? (
              <div className="flex flex-col gap-3">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-12 w-12 rounded-lg" />
                    <div className="flex flex-1 flex-col gap-1.5">
                      <Skeleton className="h-4 w-40" />
                      <Skeleton className="h-3 w-28" />
                    </div>
                    <Skeleton className="h-4 w-12" />
                  </div>
                ))}
              </div>
            ) : !tracks?.length ? (
              <div className="flex flex-col items-center gap-3 py-6 text-center">
                <Music className="h-10 w-10 text-muted-foreground/50" />
                <p className="text-sm text-muted-foreground">
                  No top tracks found for this artist.
                </p>
              </div>
            ) : (
              <div className="flex flex-col divide-y divide-border/50">
                {tracks.map((t, i) => (
                  <TrackRow key={t.id} track={t} index={i} />
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
