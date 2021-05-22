import React from 'react'
import {View, Text, Platform, Image, SafeAreaView,StyleSheet, ScrollView} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'
import HeaderButton from '../component/HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import {DrawerActions} from '@react-navigation/native'
import Color from '../constant/Color'
import { CATEGORIES, FAVORITE } from '../data/dummy-data'


const ProfileScreen = (props) => {
    const favorite = FAVORITE.map((pl) =>
        CATEGORIES.filter((kategori)=> kategori.id === pl.id_categori)    
    )
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                <Image
                  source={{ uri: "https://www.kindpng.com/picc/b/136/1369892.png" }}
                  style={styles.image}
                  resizeMode="center"
                ></Image>
              </View>
              <View style={styles.add}>
                <MaterialIcons
                  name="verified-user"
                  color="black"
                  size={18}
                  color="#DFD8C8"
                  style={{ marginTop: 1 }}
                />
              </View>
            </View>
    
            <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 30 }]}>
                Teh Pucuk
              </Text>
              <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
                Developer
              </Text>
            </View>
    
            <View style={styles.statsContainer}>
              <View
                style={[
                  styles.statsBox,
                  {
                    borderColor: "#DFD8C8",
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                  },
                ]}
              >
                <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                <Text style={[styles.text, styles.subText]}>Makanan Favorit</Text>
              </View>
            </View>
    
            <View style={{ marginTop: 32 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {favorite.map((fav) => (
                  <View style={styles.mediaImageContainer} key={fav[0].id}>
                    <Image
                      source={{ uri: fav[0].UrlImage }}
                      style={styles.image}
                      resizeMode="cover"
                    ></Image>
                  </View>
                ))}
              </ScrollView>
            </View>
            <Text style={[styles.subText, styles.recent]}>Informasi</Text>
            <View style={{ alignItems: "center" }}>
              <View style={styles.recentItem}>
                <View style={styles.activityIndicator}></View>
                <View style={{ width: 250 }}>
                  <Text
                    style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                  >
                    Nomor Telepon :
                    <Text style={{ fontWeight: "400" }}>081234567890</Text>
                  </Text>
                </View>
              </View>
    
              <View style={styles.recentItem}>
                <View style={styles.activityIndicator}></View>
                <View style={{ width: 250 }}>
                  <Text
                    style={[styles.text, { color: "#41444B", fontWeight: "300" }]}
                  >
                    Email:
                    <Text style={{ fontWeight: "400" }}>testing@gmail.com</Text>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    };

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

const styles = StyleSheet.create ({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    profileImage:{
        marginTop:15,
        width:100,
        height:100,
        borderRadius:100,
        overflow: 'hidden'
    },
    image:{
        flex:1,
        width:undefined,
        width:undefined
    },
    add:{
        backgroundColor:"#41444B",
        position:'absolute',
        bottom:0,
        right:0,
        width:25,
        height:25,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'
    },
    infoContainer:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:18

    },
    text:{
        color:"#52575D"
    },
    statsContainer:{
        flexDirection:'row',
        alignSelf:'center',
        marginTop: 30
    },
    statsBox:{
        alignItems:'center',
        flex:1
    },
    subText:{
        fontSize:12,
        color:"#AEB5BC",
        textTransform:'uppercase',
        fontWeight:"500"
    },
    mediaImageContainer:{
        width:120,
        height:120,
        borderRadius:12,
        overflow:"hidden",
        marginHorizontal:10
    },
    recent:{
        marginLeft:140,
        marginTop:18,
        marginBottom:8,
        fontSize:12
    },
    recentItem:{
        flexDirection:"row",
        alignItems:"flex-start",
        marginBottom:10
    },
    activityIndicator:{
        padding:6,
        height:12,
        width:12,
        borderRadius:6,
        marginTop:3,
        marginRight:50
    }
})
export default ProfileScreen