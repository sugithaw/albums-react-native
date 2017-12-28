import React from 'react';
import { Text, Image, View, StyleSheet, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    // destruct props
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle} >
                    <Image 
                        style={styles.thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>
                <View style={styles.headerContent} >
                    <Text style={styles.headerTextStyle} >Album Title : {title}</Text>
                    <Text>Artist : {artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={styles.imageStyle} 
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    <Text>Buy Now!</Text>
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 400,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
