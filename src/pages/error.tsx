import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-accent-foreground">
        Back to the{' '}
        <Link to="/" className="text-sky-600">
          Main page
        </Link>
      </p>
    </div>
  );
}
