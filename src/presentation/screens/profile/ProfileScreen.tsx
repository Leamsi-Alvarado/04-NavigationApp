import React from 'react'
import { View, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
const {top} = useSafeAreaInsets();
const navigation = useNavigation()
  return (
    <View style={{
      flex: 1,
      paddingHorizontal: 20,
      marginTop: top
    }}>
        <Text>ProfileScreen</Text>

        <PrimaryButton label='abrir menu' onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}/>
    </View>
  )
}
