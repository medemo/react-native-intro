import React, { useState, useCallback } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { css } from '@emotion/native'

import GameContext from '../../context'
import Board from '../Board'

export default () => {
  const [gameState, setGameState] = useState({
    squares: Array(9).fill(null),
    turn: Math.random < 0.5 ? 'X' : 'O'
  })

  const play = useCallback(index => {
    setGameState(state => ({
      squares: [
        ...state.squares.slice(0, index),
        state.turn,
        ...state.squares.slice(index + 1)
      ],
      turn: state.turn === 'X' ? 'O' : 'X'
    }))
  })

  const reset = useCallback(() => {
    setGameState(state => ({
      ...state,
      squares: Array(9).fill(null),
    }))
  })

  return (
    <GameContext.Provider value={{ ...gameState, play }}>
      <View style={css`
        align-items: center;
        width: 80%;
      `}>
        <Text style={css`
          font-size: 30;
          font-weight: bold;
          color: ${gameState.turn === 'X' ? 'blue' : 'red'};
        `}>
          Next Player: {gameState.turn}
        </Text>
        <Board />
        <TouchableOpacity
          onPress={reset}
          style={{
            marginTop: 30,
            backgroundColor: 'orange',
            borderRadius: 20,
            paddingVertical: 10,
            width: '60%'
          }}>
          <Text style={css`
            font-size: 20;
            font-weight: bold;
            color: white;
            text-align: center
          `}>
            Reset</Text>
        </TouchableOpacity>
      </View>
    </GameContext.Provider>
  );
}