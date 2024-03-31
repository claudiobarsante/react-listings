import Header from 'components/header';
import { Outlet } from 'react-router-dom';

export function AppLayout() {
  return (
    <div className="grid-cols-app grid min-h-screen antialiased">
      <header className="col-start-2 pl-5">
        <Header />
      </header>
      <main className="col-start-2">
        <Outlet />
      </main>
      <footer className="col-start-2 pl-5">
        <div className="flex items-center justify-center">
          <span className="text-sm font-medium text-zinc-500">
            &copy; <time>{new Date().getFullYear()}</time> Number8 - Frontend assessment
          </span>
        </div>
      </footer>
    </div>
  );
}
