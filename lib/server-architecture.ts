export const serverArchitecture = {
  storageMode: "server",
  localStorageIsAuthoritative: false,
  database: {
    activeProvider: "Cloudflare D1",
    migrationTarget: "PostgreSQL / Postgres Pro",
  },
  authentication: {
    activeProvider: "ChatGPT SIWC",
    migrationTarget: "корпоративный SSO по OIDC",
  },
} as const;

export type StorageMode = typeof serverArchitecture.storageMode;

