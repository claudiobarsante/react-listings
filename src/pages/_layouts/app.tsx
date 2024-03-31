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
    </div>
  );
}
