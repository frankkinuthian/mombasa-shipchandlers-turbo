"use client";

import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export function NavSecondary({
  items,
  ...props
}: {
  items: NavItem[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  if (items.length === 0) return null;

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton render={<Link href={item.url} />}>
                  {Icon ? <Icon className="size-4" /> : null}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
