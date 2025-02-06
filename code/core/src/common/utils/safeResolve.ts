import * as resolve from 'empathic/resolve';

export const safeResolveFrom = (path: string, file: string) => resolve.from(path, file, true);

export const safeResolve = (file: string) => {
  try {
    return require.resolve(file);
  } catch (e) {
    return undefined;
  }
};
