import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"
import { config as baseConfig } from "./_base.js"

export const reactConfig = [
  ...baseConfig,
  {
    plugins: { react: pluginReact, "react-hooks": pluginReactHooks, },
    languageOptions: { ...pluginReact.configs.flat.recommended.languageOptions, globals: { ...globals.serviceworker, ...globals.browser, }, },
    settings: { react: { version: "detect" }, },
    rules: {
      ...pluginReact.configs.flat.recommended.rules, // React’s flat-config rules
      ...pluginReactHooks.configs.recommended.rules, // React Hooks rules
      "react/react-in-jsx-scope": "off",  // tweaks
      "react/prop-types": "off",
    },
  },
]
