// Dependencies
import * as React from 'react'
import type * as Stitches from '@stitches/react'

// Internals
import { Line, SpanText } from './styles'

interface SeparatorProps {
  overrideLineStyles?: Stitches.ComponentProps<typeof Line>['css']
  overrideSpanStyles?: Stitches.ComponentProps<typeof SpanText>['css']
  text?: string
}

const Separator = ({
  overrideLineStyles = undefined,
  overrideSpanStyles = undefined,
  text = 'or',
}: SeparatorProps): React.ReactElement => (
  <Line
    // @ts-ignore - This is a workaround for a bug in TypeScript
    css={overrideLineStyles}
  >
    <SpanText
      // @ts-ignore - This is a workaround for a bug in TypeScript
      css={overrideSpanStyles}
    >
      {text}
    </SpanText>
  </Line>
)

export default Separator
export type { SeparatorProps }
