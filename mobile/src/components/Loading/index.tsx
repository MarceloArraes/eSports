import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { THEME } from '../../theme'
import { styles } from './styles'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.PRIMARY} />
    </View>
  )
}

export default Loading;
