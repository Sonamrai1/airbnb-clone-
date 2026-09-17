export default function Footer() {
  return (
    <footer className="border-t border-hairline py-8">
      <div className="max-w-page mx-auto px-6 lg:px-10 flex items-center justify-between text-sm text-body">
        <p>© 2026 Airbnb Clone, Inc.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline focus-ring">Privacy</a>
          <a href="#" className="hover:underline focus-ring">Terms</a>
          <a href="#" className="hover:underline focus-ring">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
