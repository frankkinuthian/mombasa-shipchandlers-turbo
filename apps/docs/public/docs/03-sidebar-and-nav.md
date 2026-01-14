# Step 3 - Sidebar and navigation shell

Goal:
- Build sidebar structure matching the template with dynamic data.

Actions:
- Add nav components (nav-main, nav-documents, nav-secondary, nav-user) under apps/dashboard/components/.
- Update AppSidebar to use these components and the Sidebar UI primitives.
- Map Sanity nav items to the sidebar groups (or split static sections as needed).
- Use Clerk user data for NavUser menu (name, email, avatar if available).

Files:
- apps/dashboard/components/app-sidebar.tsx
- apps/dashboard/components/nav-*.tsx
- apps/dashboard/lib/navigation.ts
- apps/dashboard/lib/navigation.server.ts

Done when:
- Sidebar renders with groups, user menu, and working collapse behavior.
