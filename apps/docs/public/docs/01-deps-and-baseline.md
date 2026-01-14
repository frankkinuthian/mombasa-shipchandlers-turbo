# Step 1 - Dependencies and baseline

Goal:
- Align dependencies and decide icon library for template parity.

Actions:
- Review template deps from shadcn-dashboard-template-v0-main/package.json.
- Add required deps in `apps/dashboard` using bun (e.g. `bun add --cwd apps/dashboard @tanstack/react-table @dnd-kit/core @dnd-kit/modifiers @dnd-kit/sortable @dnd-kit/utilities recharts sonner zod` and add `@tabler/icons-react` only if you choose Tabler).
- Decide icon library (Tabler vs Lucide) and note the choice.

Files:
- apps/dashboard/package.json

Done when:
- Dependencies are installed and icon choice is documented.
