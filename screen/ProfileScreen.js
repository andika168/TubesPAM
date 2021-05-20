import React from 'react'
import {View, Text,Platform} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import HeaderButton from '../component/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DrawerActions} from '@react-navigation/native'
import Color from '../constant/Color'


const ProfileScreen = (props) =>{
    return(
        <View>
            <Text>Ini adalah Profile Screen</Text>
        </View>
    )
}
export const ProfileScreenOption = (navData) =>{
    return{
        headerStyle: { 
            backgroundColor: Platform.OS === "android" ? Color.primaryColor: "",
        },
        headerTintColor: Platform.OS === "android" ? "white" : Color.primaryColor,
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}> 
                    <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() =>{
                        navData.navigation.dispatch(DrawerActions.openDrawer());
                    }}
                    color="white"
                />
                </HeaderButtons>
            );
        },
        headerTitleStyle: {
            //
        },
        headerBackTitleStyle: {
            //
        }
    }
}
export default ProfileScreen