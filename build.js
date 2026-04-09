import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');

const buildOptions = {
  entryPoints: ['BP/scripts/main.ts'],
  bundle: true,
  outfile: 'BP/scripts/main.js',
  format: 'esm',
  platform: 'neutral',
  external: ['@minecraft/server', '@minecraft/server-ui'],
  target: 'es2020',
};

if (watch) {
  const ctx = await esbuild.context(buildOptions);
  await ctx.watch();
  console.log('[build] Watching for changes...');
} else {
  await esbuild.build(buildOptions);
  console.log('[build] Done.');
}
