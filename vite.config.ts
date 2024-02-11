import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      define: {
        "process.env.NODE_ENV": '"production"',
      },      
      build: {
        lib: {
          entry: [
            './src/client.tsx',
            './src/client/about.tsx',
            './src/client/contact.tsx',
            './src/client/Test.tsx',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      server: {
        port: 3000
      },
      plugins: [
        ...VitePluginNode({
          adapter: 'fastify',
          appPath: './src/index.ts'
        })
      ]
    }
  }
})