import React from 'react'
import { View } from 'react-native'
import { css } from '@emotion/native'

import Square from '../Square'

export default () => {
  return (
    <View style={css`
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 24;
    `}>
      {
        Array(9).fill().map((_, i) => (
          <Square key={i} index={i} />
        ))
      }
    </View>
  )
}