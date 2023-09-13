import React from "react"
import {View, Text, SafeAreaView, FlatList, Image, StyleSheet, Dimensions} from "react-native"
import songs from "./data";

export default function Player() {
    return (
        <SafeAreaView>
            <FlatList data={songs}
                      horizontal={true}
                      snapToAlignment="start"
                      decelerationRate={"fast"}
                      snapToInterval={Dimensions.get("window").width}
                      renderItem={({item}) =>
                          <View style={styles.container}>
                              <View style={styles.x}>
                                  <Image source={item.image} style={styles.image}/>
                                  <View>
                                      <Text style={styles.title}>{item.title}</Text>
                                      <Text style={styles.artist}> {item.artist}</Text>
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
        // width:300,
        // height:300,
        // marginVertical:50,
        resizeMode:"contain",
        width:"100%",
    },
    container: {
        height:Dimensions.get("window").height,
        width:Dimensions.get("window").width,
        justifyContent:"center",
        alignItems:'center'
    },
    title: {
        fontSize:20,
        textAlign:"left"
    },
    x : {
        flex:1,
        width:"80%",
        // justifyContent:"center",
        alignItems:'center'
    }
    // songInfo: {
    //     width:"100%"
    // }
})
