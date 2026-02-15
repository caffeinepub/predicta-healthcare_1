# Specification

## Summary
**Goal:** Add static image galleries for Hospital Furniture and Laboratory Setup on the Products page, and ensure the Hospital Furniture category card includes a photo with consistent alt text.

**Planned changes:**
- Add new static image assets for Hospital Furniture and Laboratory Setup under `frontend/public/assets/generated` using the specified filenames.
- Define English alt text strings for each new image in frontend content/data (so alt text is not only hardcoded in JSX).
- Update `frontend/src/content/categories.ts` so the Hospital Furniture category (`id: "furniture"`) includes `photo` and `photoAlt` using one of the new Hospital Furniture images.
- Update `frontend/src/pages/ProductsPage.tsx` to add a "Hospital Furniture" section with a responsive gallery (at least 3 images) and a "Laboratory Setup" section with a responsive gallery (at least 2 images), using `/assets/generated/...` paths and meaningful alt text.

**User-visible outcome:** On the Products page, users see a photo on the Hospital Furniture category card and can browse responsive image galleries for Hospital Furniture and Laboratory Setup with descriptive alt text on both mobile and desktop.
