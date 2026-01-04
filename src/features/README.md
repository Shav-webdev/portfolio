# Features Directory

This directory follows the **Feature-Sliced Design (FSD)** architecture pattern.

## Structure

```
features/
├── ContactForm/
│   ├── ui/
│   │   └── ContactForm.tsx      # UI component
│   ├── model/
│   │   └── types.ts             # Types, schemas, and data models
│   ├── index.ts                 # Public API (exports)
│   └── README.md                # Feature documentation (optional)
```

## FSD Principles

### Layers
- **app/** - Application routing and pages (Next.js App Router)
- **features/** - Business features (user interactions, business logic)
- **entities/** - Business entities (domain models)
- **shared/** - Reusable code (UI components, utilities, libs)

### Feature Structure

Each feature should have:
- **ui/** - UI components specific to this feature
- **model/** - Business logic, types, schemas, API calls
- **api/** - API integration (if needed)
- **lib/** - Feature-specific utilities (if needed)
- **index.ts** - Public API (what other parts of the app can import)

### Import Rules

- Features can import from `shared/`, `entities/`, and other `features/`
- Features should NOT import from `app/` (pages)
- Use the public API (`index.ts`) when importing from features
- Keep feature internals private (don't import from `ui/` or `model/` directly)

## Example Usage

```tsx
// ✅ Good - Import from public API
import { ContactForm } from "@/features/ContactForm"

// ❌ Bad - Import from internal structure
import { ContactForm } from "@/features/ContactForm/ui/ContactForm"
```

## Adding New Features

1. Create a new folder in `features/`
2. Add `ui/`, `model/`, and `index.ts`
3. Export only what's needed through `index.ts`
4. Keep feature logic self-contained

