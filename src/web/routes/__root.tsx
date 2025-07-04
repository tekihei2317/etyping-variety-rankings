import { Outlet, createRootRoute, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-8 text-center font-sans leading-relaxed">
      {/* 共通ヘッダー */}
      <header className="mb-8 text-left">
        <div className="mb-4">
          <Link to="/" className="text-decoration-none">
            <h1 className="text-3xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200">
              e-typing バラエティ総合ランキング
            </h1>
          </Link>
          <p className="text-sm text-gray-600 mt-2">
            バラエティ全13種目の合計スコアランキング
          </p>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* 共通フッター */}
      <footer className="mt-10 pt-5 border-t border-gray-300 text-center text-gray-600 text-sm">
        <p>
          データ取得元:{" "}
          <a
            href="https://www.e-typing.ne.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 no-underline hover:underline"
          >
            e-typing
          </a>
        </p>
      </footer>
    </div>
  );
}
