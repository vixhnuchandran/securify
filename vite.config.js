import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        login: "login.html",
        public: "public.html",
        private1: "private1.html",
        private2: "private2.html",
        private3: "private3.html",
      },
    },
  },
})
