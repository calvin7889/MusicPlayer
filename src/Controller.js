import React from "react"
import {View, Image, StyleSheet, TouchableOpacity} from "react-native"

export default function Controller({nextPress, prevPress, hideNext, hidePrev}) {

    return (
        <View style={styles.controllerContainer}>
            <TouchableOpacity disabled={hidePrev} onPress={()=>prevPress()} style={[styles.button, hidePrev && styles.hide]}>
                <Image source={require("../assets/prev.png")} resizeMode={"contain"} style={styles.button2}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log("do nothing")} style={styles.button}>
                <Image source={require("../assets/pause.png")} resizeMode={"contain"} style={styles.button2}/>
            </TouchableOpacity>
            <TouchableOpacity disabled={hideNext} onPress={()=>nextPress()} style={[styles.button, hideNext && styles.hide]}>
                <Image source={require("../assets/next.png")} resizeMode={"contain"} style={styles.button2}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
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
    controllerContainer: {
        flexDirection:"row",
        width:"100%",
        justifyContent:"space-around"
    }
})
