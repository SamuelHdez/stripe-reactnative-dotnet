import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { ShopItemModel } from '../models/shop-item.model';

interface ShopItemProps {
    shopItem: ShopItemModel;
}


const ShopItem: React.FC<ShopItemProps> = ({ shopItem }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{shopItem.name}</Text>
                <Text style={styles.itemDescription}>{shopItem.description}</Text>
                <Text style={styles.itemPrice}>{shopItem.price} €</Text>
            </View>
            <View style={styles.itemBuyContainer}>
                <TouchableOpacity style={[styles.itemButton, styles.itemButtonDisabled]}>
                    <Text style={styles.itemButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.itemQuantity}>{shopItem.quantity}</Text>
                <TouchableOpacity style={styles.itemButton}>
                    <Text style={styles.itemButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: Dimensions.get('window').width - 20,
        height: "auto",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        margin: 8,
        backgroundColor: '#F5F6F8',
        borderRadius: 10,
    },
    itemTextContainer: {
        width: '70%',
    },
    itemName: {
        color: '#30313D',
        fontSize: 20,
    },
    itemDescription: {
        color: '#596171',
        fontSize: 14,
    },
    itemPrice: {
        color: '#533afd',
        fontSize: 20,
        marginTop: 12
    },
    itemBuyContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 4,
        flex: 1,
    },
    itemButton: {
        backgroundColor: '#533afd',
        color: '#fff',
        padding: 10,
        borderRadius: 35,
        height: 35,
        width: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemButtonDisabled: {
        opacity: 0.25,
    },
    itemButtonText: {
        color: '#fff',
    },
    itemQuantity: {
        color: '#30313D',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
    }
});

export default ShopItem;
