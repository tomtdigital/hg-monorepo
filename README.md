# Setup

## Local Development

- pnpm i
- pnpm build-theme
- pnpm build-ui
- cd packages/hg-ui
- pnpm link @hannagrams/theme
- cd packages/hg-admin
- pnpm link @hannagrams/ui
- pnpm dev-admin
