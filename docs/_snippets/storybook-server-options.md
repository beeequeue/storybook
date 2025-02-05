```ts filename="vue/src/server/options.ts" renderer="common" language="ts"
import { findPackageSync } from 'fd-package-json';

export default {
  packageJson: findPackageSync(__dirname),
  framework: 'vue',
  frameworkPresets: [require.resolve('./framework-preset-vue.js')],
};
```
