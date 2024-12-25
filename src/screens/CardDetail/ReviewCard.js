import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { images } from '../../constants/assets';

const ReviewCard = () => {
    const images1 = [
        { id: '1', uri: images.house },
        { id: '2', uri: images.house },
    ];

    return (
        <View style={styles.card}>
            {/* Header */}
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={images.user}
                />
                <View style={styles.headerText}>
                    <Text style={styles.name}>Sandeep S.</Text>
                    <Text style={styles.date}>2 months ago</Text>
                </View>
            </View>

            {/* Review Text */}
            <Text style={styles.reviewText}>
                Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.
            </Text>

            {/* Rating */}
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                width:'100%'
            }}>

            
            <View style={styles.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                    <Image
                        key={index}
                        style={styles.starIcon}
                        source={images.star}
                    />
                ))}
                <Text style={styles.rating}>5.0</Text>
            </View>
            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.helpfulText}>Helpful?</Text>
                <TouchableOpacity style={styles.footerButton}>
                    <Text>👍 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton}>
                    <Text>👎 2</Text>
                </TouchableOpacity>
            </View>
            </View>
            {/* Image Gallery */}
            <FlatList
                data={images1}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image style={styles.reviewImage} source={item.uri} />
                )}
                contentContainerStyle={styles.imageGallery}
            />

            
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 3,
        marginVertical: 10,
        marginHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    headerText: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: 'gray',
    },
    reviewText: {
        fontSize: 14,
        color: 'gray',
        marginVertical: 8,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    starIcon: {
        width: 20,
        height: 20,
        marginRight: 4,
    },
    rating: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    imageGallery: {
        marginVertical: 10,
    },
    reviewImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 12,
    },
    helpfulText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 8,
    },
    footerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 4,
    },
});

export default ReviewCard;
