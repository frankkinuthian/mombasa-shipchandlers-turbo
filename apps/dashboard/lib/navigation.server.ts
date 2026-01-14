import "server-only";

import { sanityFetch } from "@/lib/sanity/live";
import type { NavigationConfig, NavItem } from "./navigation";

export async function getNavigation(
  navId = "main"
): Promise<NavigationConfig | null> {
  try {
    const { data: navigation } = await sanityFetch({
      query: `*[_type == "navigation" && id == $navId][0] {
        id,
        title,
        items[] {
          label,
          url,
          icon,
          group,
          roles,
          order
        }
      }`,
      params: { navId },
    });

    if (!navigation) return null;

    // Sort items by order
    navigation.items.sort(
      (a: NavItem, b: NavItem) => (a.order || 0) - (b.order || 0)
    );

    return navigation as NavigationConfig;
  } catch (error) {
    console.error("Error fetching navigation from Sanity:", error);
    return null;
  }
}
