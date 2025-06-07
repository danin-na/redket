import pluginNext from "@next/eslint-plugin-next"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"
import { config as baseConfig } from "./_base.js"

export const nextJsConfig = [
  ...baseConfig,
  {
    plugins: { react: pluginReact, "@next/next": pluginNext, "react-hooks": pluginReactHooks, },
    languageOptions: { ...pluginReact.configs.flat.recommended.languageOptions, globals: { ...globals.serviceworker, }, },
    settings: { react: { version: "detect" }, },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,  // React’s flat-config rules
      ...pluginNext.configs.recommended.rules,  // Next.js core and Core-Web-Vitals rules
      ...pluginNext.configs["core-web-vitals"].rules,
      ...pluginReactHooks.configs.recommended.rules,  // React-hooks rules 
      "react/react-in-jsx-scope": "off", // tweaks
      "react/prop-types": "off",
    },
  },
]
