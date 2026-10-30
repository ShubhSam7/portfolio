import { createRequire } from 'node:module';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const root = fileURLToPath(new URL('../', import.meta.url));
const output = await mkdtemp(join(tmpdir(), 'portfolio-game-tests-'));
try {
  const compile = spawnSync(process.execPath, [
    require.resolve('typescript/bin/tsc'),
    'lib/rock-paper-scissors.ts', 'tests/rock-paper-scissors.test.ts',
    '--outDir', output, '--target', 'es2020', '--module', 'commonjs',
    '--esModuleInterop', '--skipLibCheck',
  ], { cwd: root, stdio: 'inherit' });
  if (compile.status !== 0) {
    process.exitCode = compile.status ?? 1;
  } else {
    const tests = spawnSync(process.execPath, ['--test', join(output, 'tests/rock-paper-scissors.test.js')], { cwd: root, stdio: 'inherit' });
    process.exitCode = tests.status ?? 1;
  }
} finally {
  await rm(output, { recursive: true, force: true });
}
