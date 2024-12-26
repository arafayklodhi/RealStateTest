import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PriceComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <Text style={styles.totalPriceText}>Total Price</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>$350</Text>
                    <Text style={styles.perMonthText}>/month</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        width: '100%'
    },
    priceContainer: {
        flexDirection: 'column',
    },
    totalPriceText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 4,
    },
    price: {
        color: '#007AFF',
        fontSize: 24,
        fontWeight: '700',
    },
    perMonthText: {
        color: '#9E9E9E',
        fontSize: 14,
        marginLeft: 4,
    },
    bookNowButton: {
        backgroundColor: '#007AFF',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    bookNowText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default PriceComponent;
