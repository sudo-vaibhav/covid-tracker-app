import React from 'react'
import { View, Text } from 'react-native'
import { LineChart } from 'react-native-svg-charts'
import { colors, category } from './constants'
import { shorthand } from './utilities'

const StatChart = ({
  category,
  history,
}: {
  category: category
  history: any
}) => {
  const data = history.map((elem) => elem[category])
  return (
    <View
      style={{
        padding: 16,
        maxWidth: '40%',
        marginBottom: 15,
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
      <LineChart
        style={{
          height: 70,
        }}
        data={data}
        svg={{ stroke: colors[category], strokeWidth: 2.5 }}
      ></LineChart>
    </View>
  )
}

export default StatChart
