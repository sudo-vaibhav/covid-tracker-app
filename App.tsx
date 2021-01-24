import React, { useState, useEffect } from 'react'
import { StatusBar as SB } from 'expo-status-bar'
import {
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native'

import StatChart from './components/StatChart'
import StateTable from './components/StateTable'
import axios from 'axios'
import { categories, url } from './components/constants'

export default function App() {
  const [data, setData] = useState({
    historicData: [],
    regionalInfo: [],
    loading: true,
  })
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(url).then((res) => res.data)
      setData({
        historicData: resp.historicInfo,
        regionalInfo: resp.regionalInfo,
        loading: false,
      })
    }
    getData()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SB style="auto" />
      <View style={styles.container}>
        <>
          <ImageBackground
            source={require('./assets/virus.jpg')}
            style={{ width: '100%', height: '100%', flex: 1 }}
          />
          <View
            style={{
              flex: 3,
              marginTop: -100,
            }}
          >
            {data.loading ? null : (
              <>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}
                >
                  {categories.map((category) => {
                    return (
                      <StatChart
                        category={category}
                        key={category}
                        history={data.historicData}
                      />
                    )
                  })}
                </View>
                <StateTable data={data.regionalInfo} />
              </>
            )}
          </View>
        </>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
  },
})
