import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ShopFooter = () => {
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderTopColor: '#533afd',
        borderTopWidth: 1,
    },
    checkoutButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#533afd',
        margin: 12,
        padding: 12,
        borderRadius: 10,
        width: "80%",
    },
    checkoutText: {
        color: '#fff',
        fontSize: 20,
    },
});

export default ShopFooter;
