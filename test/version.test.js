import { version } from '../src';
import pjson from '../package.json';

test('package version should equal to publish version', () => {
  expect(version).toBe(pjson.version);
});
