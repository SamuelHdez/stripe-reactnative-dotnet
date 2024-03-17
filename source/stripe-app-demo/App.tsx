import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ShopItem from './src/components/shop-item';
import ShopFooter from './src/components/shop-footer';
import ShopHeader from './src/components/shop-header';
import { useEffect, useState } from 'react';
import { ShopItemModel } from './src/models/shop-item.model';

export default function App() {

  const [shopItems, setShopItems] = useState([]);


  useEffect(() => {
    const items = [
      {
        name: "My shop item name 1",
        description: "Description, this will be the item product description",
        price: 10.00,
        quantity: 0
      },
      {
        name: "My shop item name 2",
        description: "Description, this will be the item product description",
        price: 20.00,
        quantity: 0
      },
      {
        name: "My shop item name 3",
        description: "Description, this will be the item product description",
        price: 30.00,
        quantity: 0
      },
      {
        name: "My shop item name 4 ",
        description: "Description, this will be the item product description",
        price: 40.00,
        quantity: 0
      },
      {
        name: "My shop item name 5",
        description: "Description, this will be the item product description",
        price: 50.00,
        quantity: 0
      },
      {
        name: "My shop item name 6",
        description: "Description, this will be the item product description",
        price: 60.00,
        quantity: 0
      },
      {
        name: "My shop item name 7",
        description: "Description, this will be the item product description",
        price: 70.00,
        quantity: 0
      },
      {
        name: "My shop item name 8",
        description: "Description, this will be the item product description",
        price: 80.00,
        quantity: 0
      },
      {
        name: "My shop item name",
        description: "Description, this will be the item product description",
        price: 10.00,
        quantity: 0
      }
    ];

    setShopItems(items);
  }, []);

  const handleAddItem = (item: ShopItemModel) => {
    const newItems = shopItems.map((shopItem) => {
      if (shopItem.name === item.name) {
        shopItem.quantity = shopItem.quantity + 1;
      }
      return shopItem;
    });

    setShopItems(newItems);
  }

  const handleRemoveItem = (item: ShopItemModel) => {
    const newItems = shopItems.map((shopItem) => {
      if (shopItem.name === item.name) {
        if (shopItem.quantity > 0) {
          shopItem.quantity = shopItem.quantity - 1;
        }
      }
      return shopItem;
    });

    setShopItems(newItems);
  }

  return (
    <View style={styles.container}>
      <ShopHeader></ShopHeader>
      <ScrollView>
        {shopItems.map((item, index) => {
          return <ShopItem key={index} shopItem={item} onAddItemPress={handleAddItem} onRemoveItemPress={handleRemoveItem}></ShopItem>
        })}
      </ScrollView>
      <ShopFooter></ShopFooter>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-around",
    height: '100%',
  },
});
