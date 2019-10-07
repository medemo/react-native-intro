import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { css } from '@emotion/native'

import GameContext from '../../context'

export default props => {
  const { squares, play } = useContext(GameContext)
  const size = 0.8 * Dimensions.get('window').width / 3
  const value = squares[props.index]

  return (
    <TouchableOpacity
      onPress={() => !value && play(props.index)}
      style={css`
        width: ${String(size)};
        height: ${String(size)};
        justify-content: center;
        border: solid orange;`}
    >
      <Text style={css`
        text-align: center;
        font-size: 48;
        font-weight: bold;
        color: ${value === 'X' ? 'blue' : 'red'};
      `}>
        {value}
      </Text>
    </TouchableOpacity>
  )
}