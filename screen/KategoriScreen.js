import React,{useEffect, useCallback} from 'react'
import { View, Text, Platform, FlatList } from 'react-native'
import HeaderButton from '../component/HeaderButton'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import Color from '../constant/Color';
import {DrawerActions} from '@react-navigation/native'
import CategoriGridTile from '../component/CategoriGridTitle';
import { CATEGORIES } from '../data/dummy-data';
import {useDispatch, useSelector} from 'react-redux'
import * as categoriAction from '../store/action/categori'

const KatergoriScreen = (props) =>{
    const dispatch = useDispatch ()
    const categori = useSelector((state)=>state.categori.categori)
    const loadCategori = useCallback(async ()=>{
        dispatch (categoriAction.fetchCategori())
    },[dispatch])

    useEffect (()=>{
        loadCategori()
    },[loadCategori])

    const renderGridItem = (ItemData)=>{
        
    return (
     <CategoriGridTile
        title={ItemData.item.title}
        onSelect={()=>{
            props.navigation.navigate("MealsDetailScreen" ,{
                categoriId:ItemData.item.id
            })
            
        }}
        image={ItemData.item.UrlImage}
        />
        )
    }

    return (
        <FlatList
        numColumns={2}
        data={!categori ? CATEGORIES : categori}
        renderItem={renderGridItem}
        keyExtractor={(item,index) => item.id}
        />
    );
};

export const KategoriScreenOption = (navData) =>{
    return {
        headerTitle:"Category",
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Color.primaryColor:"",
        },
        headerTintColor: Platform.OS === "android" ? "white": Color.primaryColor,
        headerLeft: () =>{
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.dispatch(DrawerActions.openDrawer());
                    }}
                    color="white"
                    />

                </HeaderButtons>
            );
        },
        headerTitleStyle: {

        },
        headerBackTitleStyle: {

        }

    }   
}

export default KatergoriScreen;