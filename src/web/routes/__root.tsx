import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="max-w-7xl mx-auto p-8 text-center font-sans leading-relaxed">
      <Outlet />
    </div>
  );
}
