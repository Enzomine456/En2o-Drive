/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { useStyletron } from 'baseui';
import { useValueDebounce } from 'react-view';

type TEditorProps = {
  code: string;
  placeholder?: string;
  language?: string;
  onChange: (code: string) => void;
  'data-testid'?: string;
  small?: boolean;
};

const Editor: React.FC<TEditorProps> = ({
  code: globalCode,
  onChange,
  placeholder,
  'data-testid': testId,
  small,
}) => {
  const [css, theme] = useStyletron();
  const [code, setCode] = useValueDebounce<string>(globalCode, onChange);

  return (
    <div
      className={css({
        boxSizing: 'border-box',
        border: `1px solid ${theme.colors.inputBorder}`,
        borderRadius: theme.borders.inputBorderRadius,
        padding: theme.sizing.scale400,
        width: '100%',
        fontFamily: 'monospace',
      })}
    >
      <CodeEditor
        value={code || ''}
        language="jsx"
        placeholder={placeholder}
        onChange={(evn: React.ChangeEvent<HTMLTextAreaElement>) => setCode(evn.target.value)}
        padding={small ? 4 : 12}
        style={{
          fontSize: small ? 13 : 14,
          fontFamily: 'monospace',
        }}
        data-testid={testId}
      />
    </div>
  );
};

export default Editor;
