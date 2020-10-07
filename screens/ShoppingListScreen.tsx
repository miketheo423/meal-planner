import * as React from 'react';
const { useState } = React;
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import DraggableFlatList from 'react-native-draggable-flatlist';

const exampleData = [
  {
    key: 'soy-milk-1',
    label: 'Soy Milk',
  },
  {
    key: 'Potatoes',
    label: 'Potatoes',
  },
  {
    key: 'Onion',
    label: 'Onion',
  },
];

export default function ShoppingListScreen() {
  const [data, setData] = useState(exampleData);
  const renderItem = ({ item, index, drag, isActive }: any) => {
    return (
      <>
        <TouchableOpacity
          style={{
            height: 48,
            justifyContent: 'center',
            opacity: isActive ? 0.7 : 1,
          }}
          onLongPress={drag}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {item.label}
          </Text>
        </TouchableOpacity>
        <View
          style={{ height: 2 }}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.key}`}
        onDragEnd={({ data }) => setData(data)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
