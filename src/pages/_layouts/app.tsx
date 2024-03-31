import { Outlet } from 'react-router-dom';

/*/
 We need to tell the root route where we want it to render its child routes. We do that with <Outlet>.
 */
export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <main className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </main>
    </div>
  );
}
