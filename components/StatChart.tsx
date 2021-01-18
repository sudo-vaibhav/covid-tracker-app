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
      <Chart
        style={{
          height: 70,
          //   width: 400
        }}
        data={data.map((d, i) => ({ x: i, y: d }))}
        // padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        // xDomain={{ min: -2, max: 10 }}
        // yDomain={{ min: -4, max: 20 }}
      >
        {/* <VerticalAxis
          //   tickCount={10}
          theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
        /> */}
        {/* <HorizontalAxis tickCount={3} /> */}
        {/* <Area
          theme={{
            gradient: {
              from: { color: '#44bd32' },
              to: { color: '#44bd32', opacity: 0.2 },
            },
          }}
        /> */}
        <Line theme={{ stroke: { color: '#44bd32', width: 5 } }} />
      </Chart>
    </View>
  )
}

export default StatChart
