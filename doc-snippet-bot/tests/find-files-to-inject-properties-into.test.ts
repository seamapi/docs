import test from 'ava';
import mockFs from 'mock-fs';
import { findFilesToInjectPropertiesInto } from '../src/find-files-to-inject-properties-into';

test.before(() => {
  mockFs({
    '/testdir': {
      'file1.md': '<!-- INJECT PROPERTIES /access_codes/create -->\n\nOther stuff!',
      'file2.md': "I'm a normal markdown file!",
      'dir1': {
        'nested.md': '<!-- INJECT PROPERTIES /another/endpoint -->',
        'nested2.md': 'No properties here.',
      },
    },
  });
});

test.after(() => {
  mockFs.restore();
});

test('findFilesToInjectPropertiesInto', async (t) => {
  const injectFiles = await findFilesToInjectPropertiesInto('/testdir');
  const expected = [
    '/testdir/file1.md',
    '/testdir/dir1/nested.md',
  ];
  t.deepEqual(injectFiles.sort(), expected.sort());
});
