/* eslint-env jasmine */

let lib = require('.');

describe('package', () => {

  'use strict';

  it('can handle trailing tag', () => {

    let result = lib`Hello world${0}`('!');

    expect(result).toBe('Hello world!');

  });

  it('can handle prefixed tag', () => {

    let result = lib`${0}Sally,`('Dear ');

    expect(result).toBe('Dear Sally,');

  });

  it('can handle tag appearing multiple times', () => {

    let result = lib`${0} is ${0}`('Joe');

    expect(result).toBe('Joe is Joe');

  });

  it('can handle excessive parameters', () => {

    let result = lib`Hello ${0}.`('Jack', 'Jimmy', 'Jake');

    expect(result).toBe('Hello Jack.');

  });

  it('can handle missing some parameters', () => {

    let result = lib`Dear ${0}, Mr. ${1} doesn't like you.`('Fred');

    expect(result).toBe('Dear Fred, Mr. undefined doesn\'t like you.');

  });

  it('can handle missing all parameters', () => {

    let result = lib`Dear ${0}, Mr. ${1} doesn't like you.`();

    expect(result).toBe('Dear undefined, Mr. undefined doesn\'t like you.');

  });

  it('can handle empty tag', () => {

    let result = lib``();

    expect(result).toBe('');

  });

});
