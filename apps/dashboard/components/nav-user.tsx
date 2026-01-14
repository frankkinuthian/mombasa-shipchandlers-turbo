"use client";

import { UserButton, useUser } from "@clerk/nextjs";

import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";

export function NavUser() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center gap-2 rounded-md p-2">
            <div className="h-8 w-8 rounded-lg bg-muted animate-pulse" />
            <div className="flex flex-1 flex-col gap-1">
              <div className="h-3 w-24 rounded bg-muted animate-pulse" />
              <div className="h-3 w-32 rounded bg-muted animate-pulse" />
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center gap-2 rounded-md p-2">
          <UserButton
            appearance={{
              elements: {
                userButtonTrigger: "h-8 w-8 rounded-lg",
                avatarBox: "h-8 w-8",
              },
            }}
          />
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">
              {user.fullName || user.firstName || "User"}
            </span>
            {user.primaryEmailAddress?.emailAddress ? (
              <span className="text-muted-foreground truncate text-xs">
                {user.primaryEmailAddress.emailAddress}
              </span>
            ) : null}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
