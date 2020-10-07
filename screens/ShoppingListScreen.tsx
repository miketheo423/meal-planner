import * as React from 'react';
const { useState } = React;
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import DraggableFlatList from 'react-native-draggable-flatlist';

const exampleData = [...Array(20)].map((d, index) => ({
  key: `item-${index}`, // For example only -- don't use index as your key!
  label: index,
  backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${
    index * 5
  }, ${132})`,
}));
export default function ShoppingListScreen() {
  const [data, setData] = useState(exampleData);
  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <TouchableOpacity
        style={{
          height: 100,
          backgroundColor: isActive ? 'blue' : item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: 'bold',
            color: 'white',
            fontSize: 32,
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
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
    // alignItems: 'center',
    // justifyContent: 'center',
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
