import React from 'react'
import {View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight;

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>victor</Text>
                <TouchableOpacity activeOpacity={0.6} style={styles.buttonUser}>
                    <Feather name="user" size={20} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#38a69d',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        height: 50,
    },
    content:{
        paddingTop: 20,
        height: 30,
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    buttonUser:{
        width: 30,
        height: 30,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44,
    }
});