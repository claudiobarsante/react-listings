export function NoResults() {
  return (
    <div className="mt-10 flex min-h-screen flex-col items-center justify-start gap-2 lg:mt-52">
      <h1 className="text-4xl font-bold">No results</h1>
      <p className="text-accent-foreground">
        Oops! No results match your search criteria. Consider adjusting your filters for better results.
      </p>
    </div>
  );
}
