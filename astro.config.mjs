// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://turn-digital.github.io/new-docs-3-layer/",
  integrations: [
    starlight({
      title: "My Docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            {
              label: "Test",
              items: [
                { label: "test item", slug: "guides/test/example" },
                {
                  label: "test 3rd level",
                  items: [
                    {
                      label: "test 3rd level 1",
                      slug: "guides/test/test1/example",
                    },
                    {
                      label: "test 3rd level 2",
                      slug: "guides/test/test1/example1",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
