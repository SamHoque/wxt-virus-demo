import '../style.css'

import ReactDOM from 'react-dom/client'

import App from './App.tsx'

export default defineContentScript({
  cssInjectionMode: 'ui',
  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      anchor: 'body',
      append: 'first',
      name: 'lynx-innovations-body',
      onMount: (container) => {
        // Don't mount react app directly on <body>
        const wrapper = document.createElement('div')
        container.append(wrapper)

        const root = ReactDOM.createRoot(wrapper)
        root.render(<App />)
        return { root, wrapper }
      },
      onRemove: (elements) => {
        elements?.root.unmount()
        elements?.wrapper.remove()
      },
      position: 'inline',
    })

    ui.mount()
  },

  matches: ['*://*.facebook.com/*'],
})
