import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@repo/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Mombasa Ship Chandlers",

  projectId: "akndkv0c",
  dataset: "production",

  basePath: "/studio",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
