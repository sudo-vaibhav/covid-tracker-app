import React from 'react'
import { View, Text, FlatList } from 'react-native'
import TableRow, { tableRowstyles } from './TableRow'
import { categories, colors } from './constants'

const StateTable = ({ data }) => {
  return (
    <View
      style={{
        margin: 19,
      }}
    >
      <View style={tableRowstyles.view}>
        <Text style={tableRowstyles.state}>State/ UT</Text>
        {categories.map((e) => {
          return (
            <Text
              key={e}
              style={{ ...tableRowstyles.numbers, color: colors[e] }}
            >
              {e[0]}
            </Text>
          )
        })}
      </View>
      <FlatList
        data={data}
        renderItem={TableRow}
        contentContainerStyle={{ paddingBottom: 400 }}
        keyExtractor={(item) => item.state.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default StateTable
