export const navigation = {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Navigation ID",
      type: "string",
      description: 'Unique identifier (e.g., "main", "footer")',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Display title for this navigation",
    },
    {
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "url",
              title: "URL",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "icon",
              title: "Icon Name",
              type: "string",
              description: 'Lucide icon name (e.g., "Home", "Settings")',
            },
            {
              name: "group",
              title: "Group",
              type: "string",
              description: "Optional group label for grouping items",
            },
            {
              name: "roles",
              title: "Visible to Roles",
              type: "array",
              of: [{ type: "string" }],
              description: "Leave empty to show to all users",
              options: {
                list: [
                  { title: "Admin", value: "admin" },
                  { title: "Manager", value: "manager" },
                  { title: "Staff", value: "staff" },
                  { title: "Viewer", value: "viewer" },
                ],
              },
            },
            {
              name: "order",
              title: "Order",
              type: "number",
              description: "Sort order (lower numbers appear first)",
            },
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "url",
              group: "group",
            },
            prepare(selection: any) {
              const { title, subtitle, group } = selection;
              return {
                title,
                subtitle: group ? `${group} - ${subtitle}` : subtitle,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "id",
    },
  },
};
