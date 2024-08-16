import React from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { FlatList } from 'react-native-gesture-handler'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'

const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
  { id: 7, name: 'Producto 7' },
  { id: 8, name: 'Producto 8' },
  { id: 9, name: 'Producto 9' }
]



export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>ProductsScreen</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (<PrimaryButton label={item.name} onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})} />)} />

      <Text style={{ marginBottom: 10, fontSize: 30 }}>ProductsScreen</Text>
      <PrimaryButton onPress={() => navigation.navigate('Settings')} label='Ajustes'/>

    </View>
  )
} 