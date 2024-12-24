const globals = {
  "ContentScriptContext": true,
  "InvalidMatchPattern": true,
  "MatchPattern": true,
  "MigrationError": true,
  "browser": true,
  "createIframeUi": true,
  "createIntegratedUi": true,
  "createShadowRootUi": true,
  "defineAppConfig": true,
  "defineBackground": true,
  "defineConfig": true,
  "defineContentScript": true,
  "defineUnlistedScript": true,
  "defineWxtPlugin": true,
  "fakeBrowser": true,
  "i18n": true,
  "injectScript": true,
  "storage": true,
  "useActiveIndicator": true,
  "useAppConfig": true,
  "useCallback": true,
  "useContext": true,
  "useEffect": true,
  "useMemo": true,
  "useReducer": true,
  "useRef": true,
  "useState": true
}

export default {
  name: "wxt/auto-imports",
  languageOptions: {
    globals,
    sourceType: "module",
  },
};