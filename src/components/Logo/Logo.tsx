import { Earth } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <Earth size={32} />
      <p className="text-xl font-semibold">SA</p>
    </div>
  );
}
