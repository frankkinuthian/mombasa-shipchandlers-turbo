import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { SignOutButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Handle case where user was deleted but session still exists
  let user;
  try {
    user = await currentUser();
  } catch (error: any) {
    // User was deleted in Clerk but session is still valid
    if (error?.status === 404 || error?.code === "api_response_error") {
      redirect("/sign-in");
    }
    throw error;
  }

  // If somehow user is null, sign them out
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Theme toggle in top right corner */}
      <div className="fixed right-8 top-8">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-2xl space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome back, {user.firstName || "there"}! 👋
        </h1>
        <p className="text-lg text-muted-foreground">
          You&apos;ve successfully signed in to your Ship Chandling Dashboard
        </p>

        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Dashboard coming soon</h2>
          <p className="text-sm text-muted-foreground">
            This is your protected dashboard area. We&apos;ll build out the full
            dashboard UI next!
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Try the theme toggle in the top-right corner! 🌙☀️
          </p>
        </div>

        <div className="pt-6">
          <SignOutButton>
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
}
