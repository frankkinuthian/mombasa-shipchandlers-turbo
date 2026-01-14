import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Sign in to your dashboard to manage your operations
        </p>
      </div>

      <SignIn
        appearance={{
          elements: {
            rootBox: "w-full",
            card: "w-full shadow-none",
          },
        }}
      />
    </div>
  );
}
