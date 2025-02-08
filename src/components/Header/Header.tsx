import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Logo from "@/components/Logo/Logo";

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-between items-center border-b border-black/10 dark:border-gray-800/50">
      <Logo />
      <nav className="hidden md:flex space-x-6"></nav>
      <ThemeToggler />
    </header>
  );
}
