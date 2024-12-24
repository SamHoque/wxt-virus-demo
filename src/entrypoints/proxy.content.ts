export default defineContentScript({
  async main() {

  },
  matches: ['*://*.facebook.com/messages/*'],
  runAt: 'document_start',
  world: 'MAIN',
})
