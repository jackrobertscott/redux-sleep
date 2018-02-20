import test from 'ava';
import { plural, singular } from 'pluralize';
import Resource from '../lib/index';

test('resource exists', t => t.truthy(Resource));

const appName = 'app';
const resourceName = 'example';
const exampleResource = new Resource(appName, resourceName);

test('resource array name is set correctly', t => t.is(exampleResource.arrayName, plural(resourceName)));
test('resource single name is set correctly', t => t.is(exampleResource.singleName, singular(resourceName)));
test('reducer exists', t => t.truthy(exampleResource.reducer));
test('should contain a "add" action', t => t.notThrows(exampleResource.action('add')));
test('should not contain a "doesNotExist" action', t => t.throws(() => exampleResource.action('doesNotExist')));