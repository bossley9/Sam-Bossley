import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ThemeProvider from '../';

afterEach(cleanup);

describe('theme provider component', () => {
  let renderThemeProvider;

  beforeEach(() => {
    renderThemeProvider = (props) => render(<ThemeProvider {...props}><div></div></ThemeProvider>);
  })

  it('is defined', () => {
    let container = renderThemeProvider();
    expect(container).toBeDefined();
  })

  describe('createVariables', () => {
    let provider = new ThemeProvider();


    it('uses the correct prefix and infix', () => {
      let refPrefix = '$$';
      let refInfix = '!@';
      
      let obj = { test: { testTwo: true } }

      let test = provider.createVariables(obj, refPrefix, refInfix);
      let testKey = Object.keys(test[0])[0];

      expect(testKey).toBe(refPrefix + 'test' + refInfix + 'testTwo');
      expect(test[0][testKey]).toBe(true);
    })

  })

})