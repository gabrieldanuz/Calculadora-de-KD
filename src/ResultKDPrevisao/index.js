import React from 'react'
import { View, Text } from 'react-native'

export default function ResultKDPrevisao(props){
    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>{props.ResultKDPrevisao}</Text>
        </View>
    )
}