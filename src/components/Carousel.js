import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Carousel, { Pagination} from 'react-native-snap-carousel';

const WIDTH = Dimensions.get('window').width ;
const HEIGHT = Dimensions.get('window').height;

const data = [
    {
        title: "Aenean leo",
        body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        imgUrl: "https://picsum.photos/id/11/200/300"
    },
    {
        title: "In turpis",
        body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
        imgUrl: "https://picsum.photos/id/10/200/300"
    },
    {
        title: "Lorem Ipsum",
        body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
        imgUrl: "https://picsum.photos/id/12/200/300"
    }
]

const Carousel = () => {
    const [imgActive, setImgActive] = useState(0)
    return (
        <View>
            <Image 
                source={{uri: item.imgUrl}}
            />
            <Text>{item.title}</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25
    }
})

export default Carousel;