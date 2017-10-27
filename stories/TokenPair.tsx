import * as React from 'react'

import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { decorateAction } from '@storybook/addon-actions'

import TokenPair from 'components/TokenPair'

import { code2tokenMap, TokenCode } from 'globals'

const codeList = Object.keys(code2tokenMap) as TokenCode[]

const samplePair = (list: any[]): [any, any] => {
  const copy = list.slice()
  const getRandomInd = () => Math.floor(Math.random() * copy.length)

  const [one] = copy.splice(getRandomInd(), 1)
  const two = copy[getRandomInd()]

  return [one, two]
}

const [sell, buy] = samplePair(codeList)
const codePair = { sell, buy }

const tokenBalances = codeList.reduce(
  (acc, code) => (acc[code] = (Math.random() * 5).toFixed(9), acc), {},
) as {[code in TokenCode]: number }

const CenterDecor = (story: Function) => (
  <div
    style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div style={{
      padding: 20,
      backgroundColor: 'white',
      position: 'relative',
    }}>
      {story()}
    </div>
  </div>
)

const stringifyAction = decorateAction([
  args => [args[0].mod],
])

storiesOf('TokenPair', module)
  .addDecorator(CenterDecor)
  .addWithJSX('SELL <-> RECEIVE', () => <TokenPair
    openOverlay={stringifyAction('OPEN OVERLAY to select a token to')}
    tokenPair={object('tokenPair', codePair)}
    tokenBalances={object('tokenBalances', tokenBalances)}
  />)