/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_WOOSMAP_PUBLIC_API_KEY: string;
    readonly VITE_ENV: string;
    // Add other environment variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  