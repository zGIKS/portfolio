export function Section1() {
  return (
    <section className="flex w-full flex-col gap-6 bg-muted px-6 py-6 text-card-foreground md:flex-row md:items-center md:justify-between md:px-10">
      <div className="flex items-center gap-4">
        <div className="h-24 w-24 shrink-0 rounded-md border-2 border-border bg-muted" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">giks</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Mateo Aleman</span>
            <span className="inline-flex h-3 w-5 overflow-hidden rounded-sm border border-border">
              <span className="h-full w-1/3 bg-destructive" />
              <span className="h-full w-1/3 bg-background" />
              <span className="h-full w-1/3 bg-destructive" />
            </span>
            <span>Peru</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 md:items-end">
        <div className="flex items-center gap-2 text-lg">
          <span>Level</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-sm">
            5
          </span>
        </div>
        <div className="max-w-sm rounded-md bg-muted px-4 py-3 text-sm text-muted-foreground">
          You can feature one of your Badges here. Select one from your edit profile page.
        </div>
        <button
          type="button"
          className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
        >
          Edit Profile
        </button>
      </div>
    </section>
  );
}
