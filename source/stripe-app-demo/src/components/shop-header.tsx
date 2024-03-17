import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const ShopHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Stripe Payment Demo</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#533afd',
        borderBottomWidth: 1,
        paddingTop: 48,
        padding: 12,
        backgroundColor: '#533afd',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 24,
    }
});

export default ShopHeader;
