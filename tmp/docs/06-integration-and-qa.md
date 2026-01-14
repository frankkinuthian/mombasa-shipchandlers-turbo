# Step 6 - Page integration, theme, QA

Goal:
- Assemble the page layout and align theme tokens.

Actions:
- Update dashboard page to render SidebarProvider, AppSidebar, SiteHeader, SectionCards, ChartAreaInteractive, DataTable in the template order.
- Add CSS vars to globals (sidebar colors, radius, chart colors) to match the template.
- Ensure fonts and ThemeProvider are applied in app layout.
- Run dev and verify mobile and desktop behavior.

Files:
- apps/dashboard/app/(dashboard)/dashboard/page.tsx
- apps/dashboard/app/layout.tsx
- apps/dashboard/app/globals.css

Done when:
- Dashboard looks and behaves like the template across breakpoints.
