import React, {useRef, useState} from "react"
import {View, Text, SafeAreaView, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native"
import songs from "./data";

export default function Player() {
    // const [isAtEnd, setIsAtEnd] = useState(false);
    const flatListRef = useRef(FlatList);
    const nextPress = (index) => {

        flatListRef?.current?.scrollToIndex({
            animated: true,
            index: index + 1
        });
    }
    const prevPress = (index) => {
        if (index != 0) {
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
            <FlatList data={songs}
                      scrollEnabled={false}
                      horizontal={true}
                      snapToAlignment="start"
                      decelerationRate={"fast"}
                      snapToInterval={Dimensions.get("window").width}
                      keyExtractor={(item, _) => item.id}
                      ref={flatListRef}
                      // onEndReached={() => setIsAtEnd(true)}
                      renderItem={({item, index}) =>
                          <View style={styles.container}>
                              <View style={styles.header}>
                                  <Text>Liked Songs</Text>
                              </View>
                              <View style={styles.x}>
                                  <Image source={item.image} resizeMode={"contain"} style={styles.image}/>
                                  <View style={styles.songInfo}>
                                      <Text style={styles.title}>{item.title}</Text>
                                      <Text style={styles.artist}>{item.artist}</Text>
                                  </View>
                                  <View style={styles.controllerContainer}>
                                      <TouchableOpacity onPress={()=>prevPress(index)} style={styles.button}>
                                        <Image source={require("../assets/prev.png")} resizeMode={"contain"} style={styles.button2}/>
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={()=>console.log("do nothing")} style={styles.button}>
                                          <Image source={require("../assets/pause.png")} resizeMode={"contain"} style={styles.button2}/>
                                      </TouchableOpacity>
                                      <TouchableOpacity onPress={()=>nextPress(index)} style={styles.button}>
                                          <Image source={require("../assets/next.png")} resizeMode={"contain"} style={styles.button2}/>
                                      </TouchableOpacity>
                                  </View>
                              </View>

                          </View>
            }
            />
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

    button: {
        width:"20%",
        height:"auto",
        aspectRatio:"1/1",
    },
    button2: {
        width:"100%",
        height:"auto",
        aspectRatio:"1/1",
    },
    container: {
        height:Dimensions.get("window").height,
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
