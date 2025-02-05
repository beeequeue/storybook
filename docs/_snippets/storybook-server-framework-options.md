```ts filename="my-framework/src/server/options.ts" renderer="common" language="ts"
import { findPackageSync } from 'fd-package-json';

export default {
  packageJson: findPackageSync({ cwd: __dirname }),
  framework: 'my-framework',
  frameworkPath: '@my-framework/storybook',
  frameworkPresets: [require.resolve('./framework-preset-my-framework.js')],
};
```
