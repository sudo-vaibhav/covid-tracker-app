import React from 'react'
import { View, Text } from 'react-native'
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Area,
  Line,
} from 'react-native-responsive-linechart'
import { colors } from './constants'
import { shorthand } from './utilities'
type category = 'confirmed' | 'active' | 'recovered' | 'deceased'

const StatChart = ({
  category,
  history,
}: {
  category: category
  history: any
}) => {
  //@ts-ignore
  const data = history.map((elem) => elem[category]) || []

  return (
    <View
      style={{
        flexBasis: '50%',
        padding: 16,
        maxWidth: '40%',
        marginTop: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 12,
          color: colors[category],
          textTransform: 'uppercase',
        }}
      >
        {category}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 28,
        }}
      >
        {shorthand(data[data.length - 1])}
      </Text>
    </View>
  )
}

export default StatChart
