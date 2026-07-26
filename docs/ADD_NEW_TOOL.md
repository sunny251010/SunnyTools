# Add a New Tool

Use this checklist for every new browser-based tool.

## 1. Add Tool Data

Edit `src/data/tools.ts` and add a `Tool` entry:

```ts
{
  id: "new-tool",
  name: "New Tool",
  slug: "new-tool",
  shortDescription: "Short card text.",
  description: "Longer SEO-friendly page description.",
  categoryId: "developer-tools",
  icon: "NT",
  keywords: ["keyword", "task"],
  status: "active"
}
```

Use `planned` until the route and tool component are ready.

## 2. Confirm Category

Reuse a category from `src/data/categories.ts`. Add a category only when the tool does not fit the
existing taxonomy.

## 3. Create the Tool Component

Create a folder under `src/components/tools/<tool-slug>/`.

Example:

```text
src/components/tools/json-formatter/JsonFormatterTool.astro
```

Keep UI and browser interaction in this component. Put reusable logic in `src/utils/`.

## 4. Create the Route

Create:

```text
src/pages/tools/<tool-slug>.astro
```

Read the tool from `getToolBySlug("<tool-slug>")`.

## 5. Use ToolLayout

Wrap the route with `ToolLayout` and pass the tool and related tools:

```astro
<ToolLayout tool={tool} relatedTools={relatedTools}>
  <NewTool slot="tool" />
  <Fragment slot="content">...</Fragment>
  <Fragment slot="faq">...</Fragment>
</ToolLayout>
```

## 6. Add SEO

The route inherits SEO through `ToolLayout` and `BaseLayout`. Confirm the tool `name`,
`description`, and slug are accurate.

## 7. Add Guide Content

Every tool page should include:

- What the tool is.
- How to use it.
- How it calculates or transforms data.
- Privacy note.
- FAQ.

## 8. Add Related Tools

Use `getRelatedTools(tool)` unless the tool needs a custom related list.

## 9. Check Responsive UI

Verify:

- Inputs fit on mobile.
- Buttons are tappable.
- Long labels wrap cleanly.
- No horizontal overflow.

## 10. Run Checks

```bash
npm run check
npm run build
```

Fix TypeScript, import, route, and build issues before marking the tool active.
