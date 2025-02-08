export default function Footer() {
  return (
    <footer className="w-full p-2 border-t border-black/10 dark:border-gray-800/50">
      <div className="text-center text-xs text-[var(--foreground)] opacity-70">
        © {new Date().getFullYear()} Sentiment Atlas. All rights reserved.
      </div>
    </footer>
  );
}
