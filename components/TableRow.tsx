import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export interface IListItem {
  state: string
  confirmed: number
  active: number
  recovered: number
  deceased: number
  key: number
}
const TableRow = ({ item }: { item: IListItem }) => {
  return (
    <View style={tableRowstyles.view}>
      <Text style={tableRowstyles.state}>{item.state}</Text>
      <Text style={tableRowstyles.numbers}>{item.confirmed}</Text>
      <Text style={tableRowstyles.numbers}>{item.active}</Text>
      <Text style={tableRowstyles.numbers}>{item.recovered}</Text>
      <Text style={tableRowstyles.numbers}>{item.deceased}</Text>
      {/* <Text style={tableRowstyles.numbers}>{item.key}</Text> */}
    </View>
  )
}

const commonStyles = {
  backgroundColor: '#eee',
  marginRight: 6,
  fontSize: 12,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 5,
  paddingRight: 5,
  textTransform: 'uppercase',
  fontWeight: '700',
  textAlign: 'center',
}
export const tableRowstyles = StyleSheet.create({
  state: {
    flex: 2,
    ...commonStyles,
  },
  numbers: {
    flex: 1,
    ...commonStyles,
  },
  view: {
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
  },
})

export default TableRow
