import React,{useState, useEffect, useCallback}from 'react'
import {View, Text, Platform, ScrollView, Image, StyleSheet} from 'react-native'
import HeaderButton from '../component/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DrawerActions} from '@react-navigation/native'
import Color from '../constant/Color'
import { CATEGORIES, RECEP } from '../data/dummy-data'
import DefaultText from '../component/DefaultText'
import{useSelector, useDispatch} from 'react-redux'
import * as favoriteAction from '../store/action/favorites'

const ListItem = (props) =>{
  return(
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealsDetailScreen = (props) =>{
  const dispatch = useDispatch ()
   const catid = props.route.params?.categoriId?? null
   const category = useSelector(state=>state.categori.categori.find(cat=>cat.id===catid))
   //CATEGORIES.find((cat)=>cat.id === catid)
   const recep = useSelector(state=>state.recep.recep.filter(rec =>rec.categoryId === category.id))
   //RECEP.filter((rec)=>rec.categoryId === category.id)
   const merge = [...recep,category]
   const [UrlImage, setUrlImage] = useState("")
   const [isFavorite, setIsFavorite] = useState (false)
   //const tes = useSelector(state=>state.recep.recep)
   const toogleFavoriteHandle = useCallback(()=>{
        setIsFavorite((prevState)=> !prevState)
        dispatch(favoriteAction.toogleFavorites(catid))
   },[isFavorite])
   

  useEffect(()=>{
    if(merge[1]){
        props.navigation.setOptions({
          headerRight:()=>{
            return(
              <HeaderButtons HeaderButtonComponent= {HeaderButton}>
                <Item
                title="Favorite"
                iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                onPress={toogleFavoriteHandle}
                />
              </HeaderButtons>
            );
          },
        });
      setUrlImage(merge[1].UrlImage)
    }
  })

   if (!merge[0].complexity) {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <Image source={{uri:'https://www.mageworx.com/blog/wp-content/uploads/2012/06/Page-Not-Found-13.jpg'}} style={{width:100,height:100}}/>
      </View>
    );
  }

  return (
    <ScrollView>
      {!UrlImage ? (
        <Text>WAITING</Text>
      ) : (
        <Image source={{ uri: UrlImage }} style={styles.image} />
      )}

      <View>
        <View style={styles.details}>
          <DefaultText>{merge[0].duration}m</DefaultText>
          <DefaultText>{merge[0].complexity.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Bahan</Text>
        {merge[0].ingredients.map((ingredients) => (
          <ListItem key={ingredients}>{ingredients}</ListItem>
        ))}
        <Text style={styles.title}>Langkah</Text>
        {merge[0].steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listItem:{
    marginVertical:10,
    marginHorizontal:20,
    borderColor:"#ccc",
    borderWidth:1,
    padding:10
  },
  image:{
    width:'100%',
    height:200
  },
  details:{
    flexDirection:"row",
    padding:15,
    justifyContent:'space-around'
  },
  title:{
    fontSize:22,
    textAlign:"center"
  }
})

export const MealsDetailOption = (navData) =>{
    return {
        headerTitle: "Resep Makanan",
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