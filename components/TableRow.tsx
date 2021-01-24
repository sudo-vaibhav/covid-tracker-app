import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { shorthand } from './utilities'

const TableRow = ({ item }) => {
  return (
    <View style={tableRowstyles.view}>
      <Text style={tableRowstyles.state}>{shorthand(item.state)}</Text>
      <Text style={tableRowstyles.numbers}>{shorthand(item.confirmed)}</Text>
      <Text style={tableRowstyles.numbers}>{shorthand(item.active)}</Text>
      <Text style={tableRowstyles.numbers}>{shorthand(item.recovered)}</Text>
      <Text style={tableRowstyles.numbers}>{shorthand(item.deceased)}</Text>
    </View>
  )
}

const commonStyles = {
  backgroundColor: '#eee',
  marginRight: 1,
  marginLeft: 1,
  fontSize: 12,
  padding: 5,
  textTransform: 'uppercase',
  fontWeight: '700',
  textAlign: 'center',
}
export const tableRowstyles = StyleSheet.create({
  state: {
    ...commonStyles,
    flex: 2,
  },
  numbers: {
    ...commonStyles,
    flex: 1,
  },
  view: {
    marginBottom: 5,
    display: 'flex',
    flexDirection: 'row',
  },
})

export default TableRow
