import React,{useState, useEffect, useCallback}from 'react'
import {View, Text, Platform, Switch, StyleSheet} from 'react-native'
import HeaderButton from '../component/HeaderButton'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import Color from '../constant/Color'
import {DrawerActions} from '@react-navigation/native'
import { CATEGORIES } from '../data/dummy-data'




const FilterSwitch= props =>{
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true:Color.primaryColor}}
                thumbColor={Platform.OS == 'android' ? Color.primaryColor: ''}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    )
}


const FilterScreen = (props) =>{
    const [isGlutenFree,setIsGlutenFree] = useState(null)
    const kategori = CATEGORIES
    const filtercategori = (id) =>{
        const tes = kategori.filter (kategori1 => kategori1.id === id)
        if(isGlutenFree == null && tes[0].id==id){
            setIsGlutenFree(tes[0].id)
        }
        else{
            setIsGlutenFree(null)
        }
    }

    const saveFilters = useCallback (()=>{
        const appliedFilters = {
            filter: isGlutenFree
        }
    }, [isGlutenFree])

    useEffect (()=>{
        props.navigation.setOptions({
            headerRight: ()=>{
                return (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title="Menu"
                            iconName="ios-save"
                            onPress={saveFilters}
                            color="white"
                        />
                    </HeaderButtons>
                )
            }
        })
    })
    
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Food Category Filter</Text>
                {kategori.map(kategori =>(
                    <FilterSwitch
                    key={kategori.id}
                    label={kategori.title}
                    state={kategori.id === isGlutenFree ? true : false}
                    onChange={(newValue) => filtercategori(kategori.id)}
                    />     
                    )
                )
                }
        </View>
    )
}

export const FilterScreenOption = (navData) =>{
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

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center'
    },
    title:{
        fontSize:24,
        margin:20,
        textAlign:'center'
    },
    filterContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:'10'
    }

})

export default FilterScreen