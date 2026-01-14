"use client";

import Link from "next/link";
import { IconHelp, IconSearch, IconSettings } from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  groupNavigationItems,
  getIconComponent,
  type NavItem,
} from "@/lib/navigation";

export function AppSidebar({
  navItems,
  ...props
}: { navItems: NavItem[] } & React.ComponentProps<typeof Sidebar>) {
  const { ungrouped, grouped } = groupNavigationItems(navItems);
  const mainItems = ungrouped.map((item) => ({
    title: item.label,
    url: item.url,
    icon: getIconComponent(item.icon),
  }));

  const groupedSections = Object.entries(grouped).map(([groupName, items]) => ({
    label: groupName,
    items: items.map((item) => ({
      name: item.label,
      url: item.url,
      icon: getIconComponent(item.icon),
    })),
  }));

  const secondaryItems = [
    { title: "Settings", url: "/settings", icon: IconSettings },
    { title: "Get Help", url: "/help", icon: IconHelp },
    { title: "Search", url: "/search", icon: IconSearch },
  ];

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/dashboard" />}
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-semibold">
                SC
              </div>
              <span className="text-base font-semibold">Ship Chandling</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={mainItems} />
        {groupedSections.map((section) => (
          <NavDocuments
            key={section.label}
            label={section.label}
            items={section.items}
          />
        ))}
        <NavSecondary items={secondaryItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
