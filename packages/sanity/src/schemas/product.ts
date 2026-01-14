export const product = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Safety Equipment", value: "safety" },
          { title: "Deck Supplies", value: "deck" },
          { title: "Engine Supplies", value: "engine" },
          { title: "Galley Supplies", value: "galley" },
          { title: "Electrical", value: "electrical" },
          { title: "Navigation", value: "navigation" },
          { title: "Provisions", value: "provisions" },
          { title: "Other", value: "other" },
        ],
      },
    },
    {
      name: "price",
      title: "Price (USD)",
      type: "number",
      validation: (Rule: any) => Rule.min(0),
    },
    {
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
    {
      name: "specifications",
      title: "Specifications",
      type: "object",
      fields: [
        { name: "manufacturer", type: "string", title: "Manufacturer" },
        { name: "model", type: "string", title: "Model" },
        { name: "weight", type: "string", title: "Weight" },
        { name: "dimensions", type: "string", title: "Dimensions" },
      ],
    },
    {
      name: "inStock",
      title: "In Stock",
      type: "boolean",
      initialValue: true,
    },
    {
      name: "stockQuantity",
      title: "Stock Quantity",
      type: "number",
      validation: (Rule: any) => Rule.min(0),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "sku",
      media: "images.0",
    },
  },
};
