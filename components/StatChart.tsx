import React from 'react'
import { View, Text } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('window').width
import { colors } from './constants'
import { shorthand } from './utilities'
export type category = 'confirmed' | 'active' | 'recovered' | 'deceased'

const StatChart = ({
  category,
  history,
}: {
  category: category
  history: any
}) => {
  const data = history.map((elem) => elem[category])

  const labels = data.map(() => '')
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

      {data.length == labels.length && data.length > 5 ? (
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: data,
              },
            ],
          }}
          renderDotContent={() => false}
          width={screenWidth / 2}
          height={70}
          style={{
            marginLeft: -60,
          }}
          withInnerLines={false}
          withOuterLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: () => colors[category],
            propsForDots: {
              r: '0',
              strokeWidth: '0',
            },
          }}
          bezier
        />
      ) : null}
    </View>
  )
}

export default StatChart
