import React from 'react'
import { View, Text } from 'react-native'

export default function ResultKDA(props){
    return (
        <View>
            <Text style={{fontWeight: 'bold'}}>{props.ResultKDA}{`%`}</Text>
        </View>
    )
}