# Specification

## Summary
**Goal:** Replace the current placeholder site logo with the user-uploaded image and ensure the logo path is centralized in the branding theme.

**Planned changes:**
- Add `1000795148-1.jpg` to `frontend/public/assets/generated/` so it is served at `/assets/generated/1000795148-1.jpg`.
- Update the shared `Logo` rendering to use the uploaded image instead of `/assets/predicta-logo.png`.
- Centralize the logo URL in `frontend/src/branding/theme.ts` and have `frontend/src/components/Logo.tsx` read the logo path from the theme (not hardcoded).
- Ensure the header logo remains properly sized and does not break layout on mobile and desktop; provide appropriate English alt text.

**User-visible outcome:** The header (and any other area using the shared Logo component) shows the uploaded Predicta Healthcare logo consistently across all pages.
