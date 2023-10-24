import React, {useRef, useState} from "react"
import {View, Text, SafeAreaView, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native"
import songs from "./data";
import Controller from "./Controller";

export default function Player() {

    const [index, setIndex] = useState(0);
    const flatListRef = useRef(FlatList);
    const nextPress = () => {
        setIndex(index+1)
        flatListRef?.current?.scrollToIndex({
            animated: true,
            index: index + 1
        });
    }
    const prevPress = () => {
        if (index != 0) {
            setIndex(index-1)
            flatListRef?.current?.scrollToIndex({
                animated: true,
                index: index - 1
            });
        } else {
            console.log("soz no prev")
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text>Liked Songs</Text>
            </View>
            <FlatList data={songs}
                      scrollEnabled={false}
                      horizontal={true}
                      snapToAlignment="start"
                      decelerationRate={"fast"}
                      snapToInterval={Dimensions.get("window").width}
                      keyExtractor={(item, _) => item.id}
                      ref={flatListRef}
                      renderItem={({item}) =>
                          <View style={styles.container}>
                              <View style={styles.x}>
                                  <Image source={item.image} resizeMode={"contain"} style={styles.image}/>
                                  <View style={styles.songInfo}>
                                      <Text style={styles.title}>{item.title}</Text>
                                      <Text style={styles.artist}>{item.artist}</Text>
                                  </View>
                              </View>
                          </View>
            }
            />
            <Controller hidePrev={index == 0} hideNext={index == songs.length - 1} nextPress={() => nextPress()} prevPress={() => prevPress()}/>
        </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    image: {
        width:"100%",
        height:"auto",
        aspectRatio:"1/1",
        marginVertical:40
    },
    header: {
      alignItems:"center"
    },

    button: {
        width:"20%",
        height:"auto",
        aspectRatio:"1/1",
    },
    hide: {
        opacity:0
    },
    button2: {
        width:"100%",
        height:"auto",
        aspectRatio:"1/1",
    },
    container: {
        width:Dimensions.get("window").width,
        // justifyContent:"center",
        alignItems:'center',
        // backgroundColor:"#000000"
    },
    title: {
        fontSize:30,
        textAlign:"left",
        fontWeight: 'bold',
    },
    artist: {
        fontSize:20,
        textAlign:"left",
        color:"#808080"
    },
    x : {
        display: "flex",
        width:"80%",

        // justifyContent:"center",
        alignItems:'center'
    },
    songInfo: {
        width:"100%",
        marginBottom:40
    },
    controllerContainer: {
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around"
    }
})
