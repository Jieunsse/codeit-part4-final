import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  // Prettier와 충돌하는 ESLint 규칙 비활성화
  prettier,

  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // 포맷은 Prettier가 담당
      'prettier/prettier': 'warn',

      // 팀 기준 규칙
      'no-console': 'warn',
      'prefer-const': 'error',

      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
