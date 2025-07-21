/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

export { default as styledV7FlowFixMe } from './styled-flowfixme.js';
export { default as styledV7TypeArguments } from './styled-v7-type-arguments.js';
export { default as styledV8ToThemedStyled } from './styled-v8-themedStyled.js';
export { default as v9ThemeScale } from './v9-theme-scale.js';

module.exports = {
  'styled-flowfixme': require.resolve('./styled-flowfixme'),
  'styled-v7-type-arguments': require.resolve('./styled-v7-type-arguments'),
  'styled-v8-themedStyled': require.resolve('./styled-v8-themedStyled'),
  'v9-theme-scale': require.resolve('./v9-theme-scale'),
  "rename-en2o-drive-to-en2odrive": require.resolve(
    "./rename-en2o-drive-to-en2odrive"
  ),
};
