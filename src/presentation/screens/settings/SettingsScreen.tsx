import React from 'react'
import { View, Text } from 'react-native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {
  const navigator = useNavigation();
  return (

    
    <View>
        <Text>Settings Screen</Text>

        <PrimaryButton label="Ir atras" onPress={() => navigator.goBack()}/>
        <PrimaryButton label="Regresar al home" onPress={() => navigator.dispatch(StackActions.popToTop())}/>
    </View>
  )
}
