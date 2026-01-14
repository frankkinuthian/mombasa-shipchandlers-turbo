/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\app\studio\[[...index]]\route.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "@repo/sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  projectId: "akndkv0c",
  dataset: "production",
  api: {
    projectId: "akndkv0c",
    dataset: "production",
  },
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
