import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image, url } = props.album;
  const {
    textContainerStyle,
    thumbnailContainerStyle,
    textStyle,
    thumbnailStyle,
    artworkStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={textContainerStyle}>
          <Text style={textStyle}>{ title }</Text>
          <Text>{ artist }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={artworkStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  // trick to show image on whole page
  artworkStyle: {
    width: null,
    height: 300,
    flex: 1,
  },
};

// <View>
//   <Image
//     source={{ uri: props.album.image }}
//     style={{ width: 300, height: 300 }}
//   />
// </View>
export default AlbumDetail;
