declare global {
  namespace NodeJS {
    /* eslint-disable typescript-sort-keys/interface */

    interface ProcessEnv {
      readonly VITE_AUTH_URL: string
      readonly VITE_AUTH_REALM: string
      readonly VITE_AUTH_CLIENT: string
    }
    /* eslint-enable typescript-sort-keys/interface */
  }
}

export default abstract class Env {
  private constructor() {}

  public static get authUrl(): string {
    return import.meta.env.VITE_AUTH_URL
  }

  public static get authRealm(): string {
    return import.meta.env.VITE_AUTH_REALM
  }

  public static get authClient(): string {
    return import.meta.env.VITE_AUTH_CLIENT
  }
}
