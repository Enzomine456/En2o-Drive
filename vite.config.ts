import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import compression from 'vite-plugin-compression';

// Obter __dirname em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Dependências externas que não devem ser incluídas no bundle
const externalDeps = [
  'react',
  'react-dom',
  'styletron-react',
  'styletron-engine-monolithic',
  'styletron-standard',
];

// Mapeamento para UMD globals
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styletron-react': 'StyletronReact',
  'styletron-engine-monolithic': 'StyletronEngineMonolithic',
  'styletron-standard': 'StyletronStandard',
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [
      react({
        jsxRuntime: 'automatic',
      }),
      dts({
        insertTypesEntry: true,
        logLevel: 'warn',
        skipDiagnostics: false,
        cleanVueFileName: true,
      }),
      compression(),
    ],
    build: {
      target: 'esnext',
      sourcemap: !isProduction,
      minify: isProduction ? 'esbuild' : false,
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'En2oDrive',
        fileName: (format) => `en2o-drive.${format}.js`,
        formats: ['es', 'umd', 'cjs'],
      },
      rollupOptions: {
        external: externalDeps,
        input: './index.html', // ou ajuste para o seu ponto de entrada
        output: [
          {
            format: 'es',
            globals,
            entryFileNames: 'en2o-drive.es.js',
            sourcemap: !isProduction,
          },
          {
            format: 'umd',
            globals,
            name: 'En2oDrive',
            entryFileNames: 'en2o-drive.umd.js',
            sourcemap: !isProduction,
          },
          {
            format: 'cjs',
            globals,
            entryFileNames: 'en2o-drive.cjs.js',
            sourcemap: !isProduction,
            exports: 'named',
          },
        ],
        onwarn(warning, warn) {
          if (
            warning.code === 'CIRCULAR_DEPENDENCY' ||
            (typeof warning.message === 'string' &&
              warning.message.includes('PURE'))
          ) {
            return;
          }
          warn(warning);
        },
      },
      emptyOutDir: true,
      outDir: 'dist',
      cssCodeSplit: true,
      reportCompressedSize: true,
    },
    resolve: {
      alias: [
        { find: '@', replacement: resolve(__dirname, 'src') },
      ],
    },
    define: {
      __DEV__: !isProduction,
      __BROWSER__: true,
      __NODE__: false,
    },
    server: {
      port: 5173,
      open: true,
      strictPort: true,
    },
    preview: {
      port: 4173,
      open: true,
      strictPort: true,
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: externalDeps,
    },
    logLevel: 'info',
    clearScreen: false,
  };
});
