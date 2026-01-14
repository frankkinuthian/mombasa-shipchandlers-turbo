import { AuthVisual } from "@/components/auth/auth-visual";
import { ThemeToggle } from "@/components/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid min-h-screen lg:grid-cols-[2fr_3fr]">
      {/* Theme toggle in top-right corner */}
      <div className="fixed right-8 top-8 z-50">
        <ThemeToggle />
      </div>

      {/* Left side - Visual */}
      <div className="hidden lg:block">
        <AuthVisual />
      </div>

      {/* Right side - Auth form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
