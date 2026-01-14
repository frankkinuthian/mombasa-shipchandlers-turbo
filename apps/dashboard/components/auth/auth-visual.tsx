"use client";

export function AuthVisual() {
  return (
    <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-gradient-to-br from-primary via-chart-2 to-chart-5 p-12 text-primary-foreground">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />

      <div className="relative z-10">
        {/* Logo/Brand */}
        <div className="mb-2">
          <h1 className="text-4xl font-bold tracking-tight">Mombasa ShipChandlers</h1>
        </div>
        <p className="text-lg opacity-90">
          Operations, Simplified
        </p>
      </div>

      {/* Features */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Manage inventory in real-time</h3>
            <p className="text-sm opacity-80">
              Track stock levels, suppliers, and orders
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Process RFQs efficiently</h3>
            <p className="text-sm opacity-80">
              Automated workflows and quick responses
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Track orders & shipments</h3>
            <p className="text-sm opacity-80">
              End-to-end visibility on all operations
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-white/5" />
      <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-white/5" />
    </div>
  );
}
