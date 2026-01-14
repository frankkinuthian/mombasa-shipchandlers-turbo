# Step 2 - UI primitives (shadcn components)

Goal:
- Ensure apps/dashboard has the same UI building blocks as the template.

Actions:
- Diff apps/dashboard/components/ui vs shadcn-dashboard-template-v0-main/components/ui.
- Copy or merge missing components: sidebar, chart, tabs, table, drawer, tooltip, select, dropdown-menu, toggle-group, sheet, avatar, badge, skeleton, checkbox, input, label, button, separator.
- Keep exports and Tailwind classes consistent with current app conventions.

Files:
- apps/dashboard/components/ui/*
- apps/dashboard/components/theme-provider.tsx (only if missing)

Done when:
- All required UI components exist and compile in the dashboard app.
