import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  FlatList,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import StatChart from './components/StatChart'
import TableRow, { tableRowstyles, IListItem } from './components/TableRow'
import { colors } from './components/constants'
import axios from 'axios'
import { shorthand } from './components/utilities'

export default function App() {
  const [data, setData] = useState({
    listItems: [],
    historicData: [],
  })
  useEffect(() => {
    const getData = async () => {
      const latestResp = await axios.get(
        'https://api.rootnet.in/covid19-in/stats/latest',
      )

      const historyResp = await axios.get(
        'https://api.rootnet.in/covid19-in/stats/history',
      )

      setData({
        historicData: historyResp.data.data.map(({ summary }) => {
          const confirmed =
            summary.confirmedCasesIndian +
            summary.confirmedCasesForeign +
            summary.confirmedButLocationUnidentified
          const deceased = summary.deaths
          const recovered = summary.discharged
          const active = confirmed - deceased - recovered
          return {
            active,
            confirmed,
            deceased,
            recovered,
          }
        }),
        listItems: latestResp.data.data.regional.map((region, idx) => {
          const confirmed = region.totalConfirmed
          const recovered = region.discharged
          const deceased = region.deaths
          const active = confirmed - recovered - deceased
          const state = region.loc
          return {
            state,
            active: shorthand(active),
            deceased: shorthand(deceased),
            recovered: shorthand(recovered),
            confirmed: shorthand(confirmed),
            key: idx,
          }
        }),
      })
    }
    getData()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={require('./assets/virus.jpg')}
          style={{ width: '100%', height: '100%', flex: 1 }}
        />
        <View style={{ flex: 3, marginTop: -100, display: 'flex' }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}
          >
            <StatChart category={'confirmed'} history={data.historicData} />
            <StatChart category={'active'} history={data.historicData} />
            <StatChart category={'recovered'} history={data.historicData} />
            <StatChart category={'deceased'} history={data.historicData} />
          </View>
          <View
            style={{
              margin: 19,
            }}
          >
            <View style={tableRowstyles.view}>
              <Text style={tableRowstyles.state}>State / UT </Text>
              {['confirmed', 'active', 'recovered', 'deceased'].map((e) => {
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
              data={data.listItems}
              renderItem={TableRow}
              contentContainerStyle={{ paddingBottom: 400 }}
              keyExtractor={(item) => item.key.toString()}
            />
          </View>
        </View>
        <StatusBar />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
})
