QUnit.test('Reflect.hasMetadata', assert => {
  const { defineMetadata, hasMetadata } = Reflect;
  const { create } = Object;
  assert.isFunction(hasMetadata);
  assert.arity(hasMetadata, 2);
  assert.name(hasMetadata, 'hasMetadata');
  assert.looksNative(hasMetadata);
  assert.nonEnumerable(Reflect, 'hasMetadata');
  assert.throws(() => {
    return hasMetadata('key', undefined, undefined);
  }, TypeError);
  assert.same(hasMetadata('key', {}, undefined), false);
  let object = {};
  defineMetadata('key', 'value', object, undefined);
  assert.same(hasMetadata('key', object, undefined), true);
  let prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, undefined);
  assert.same(hasMetadata('key', object, undefined), true);
  assert.same(hasMetadata('key', {}, 'name'), false);
  object = {};
  defineMetadata('key', 'value', object, 'name');
  assert.same(hasMetadata('key', object, 'name'), true);
  prototype = {};
  object = create(prototype);
  defineMetadata('key', 'value', prototype, 'name');
  assert.same(hasMetadata('key', object, 'name'), true);
});