import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DataTable } from "@/components/data-table";
import data from "./data.json";

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
    <>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user.firstName || "there"}! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your ship chandling operations today.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Total Orders
            </h3>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Pending Requests
            </h3>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <h3 className="text-sm font-medium text-muted-foreground">
              Active Quotes
            </h3>
            <p className="mt-2 text-3xl font-bold">0</p>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="mb-4 text-xl font-semibold">Getting Started</h2>
          <p className="text-sm text-muted-foreground">
            Your dashboard is ready! Start by exploring the sidebar navigation
            to access different areas of your ship chandling platform.
          </p>
        </div>

        <DataTable data={data} />
      </div>
    </>
  );
}
