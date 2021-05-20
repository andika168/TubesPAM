import React from 'react'
import {View, Text, Platform} from 'react-native'
import HeaderButton from '../component/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DrawerActions} from '@react-navigation/native'
import Color from '../constant/Color'

const MealsDetailScreen = (props) =>{
    return(
        <View>
            <Text>Ini adalah Detail Screen</Text>
        </View>
    )
}

export const MealsDetailOption = (navData) =>{
    return {
        headerTitle: "Food Recipes",
        headerStyle: { 
            backgroundColor: Platform.OS === "android" ? Color.primaryColor: "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,

        headerTitleStyle: {
            //
        },
        headerBackTitleStyle: {
            //
        },
    }

}
export default MealsDetailScreen