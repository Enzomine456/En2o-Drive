/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { primitiveDarkColors } from '../../tokens';
import type { FoundationColors } from '../types';

// color constants
export const foundationColors: FoundationColors = {
  // Primary Palette
  primaryA: primitiveDarkColors.gray900Dark,
  primaryB: primitiveDarkColors.gray50Dark,
  primary: '#FFFFFF',
  primary50: '#F6F6F6',
  primary100: '#EEEEEE',
  primary200: '#E2E2E2',
  primary300: '#CBCBCB',
  primary400: '#AFAFAF',
  primary500: '#6B6B6B',
  primary600: '#545454',
  primary700: '#333333',
  // Accent Palette
  accent: '#a6e3d3',
  accent50: '#F0F8F7',
  accent100: '#E0F2EF',
  accent200: '#C2E5DE',
  accent300: '#A3D9CE',
  accent400: '#85CCBD',
  accent500: '#67BFAF',
  accent600: '#48B2A1',
  accent700: '#3A8E81',
  // Negative Palette
  negative: primitiveDarkColors.red400Dark,
  negative50: '#FFEFED',
  negative100: '#FED7D2',
  negative200: '#F1998E',
  negative300: '#E85C4A',
  negative400: '#E11900',
  negative500: '#AB1300',
  negative600: '#870F00',
  negative700: '#5A0A00',
  // Warning Palette
  warning: primitiveDarkColors.yellow400Dark,
  warning50: '#FFFAF0',
  warning100: '#FFF2D9',
  warning200: '#FFE3AC',
  warning300: '#FFCF70',
  warning400: '#FFC043',
  warning500: '#BC8B2C',
  warning600: '#996F00',
  warning700: '#674D1B',
  // Positive Palette
  positive: '#a6e3d3',
  positive50: '#F0F8F7',
  positive100: '#E0F2EF',
  positive200: '#C2E5DE',
  positive300: '#A3D9CE',
  positive400: '#85CCBD',
  positive500: '#67BFAF',
  positive600: '#48B2A1',
  positive700: '#3A8E81',
  // Monochrome Palette
  white: '#FFFFFF',
  black: '#000000',
  mono100: '#CBCBCB',
  mono200: '#AFAFAF',
  mono300: '#6B6B6B',
  mono400: '#545454',
  mono500: '#333333',
  // mono600 and mono900 are not in official brand tokens atm
  mono600: '#292929',
  mono700: '#1F1F1F',
  mono800: '#141414',
  mono900: '#111111',
  mono1000: '#000000',
};

export default foundationColors;
