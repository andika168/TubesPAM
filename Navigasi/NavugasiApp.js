import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import { createDrawerNavigator,DrawerItemList } from "@react-navigation/drawer";
import { Fontisto,Feather, MaterialIcons,Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SafeAreaView, Button, View,Platform } from "react-native";

import LoginScreen from '../screen/LoginScreen'
import SignUpScreen from '../screen/SignUpScreen'
import KatergoriScreen, {KategoriScreenOption} from '../screen/KategoriScreen'
import Color from '../constant/Color';
import FavoriteScreen,{FavoriteScreenOption} from '../screen/FavoriteScreen';
import FilterScreen from '../screen/FilterScreen';
import ProfileScreen from '../screen/ProfileScreen';
import MealsDetailScreen from '../screen/MealsDetailScreen';





const LoginStack = createStackNavigator()
const NavigationLogin = () =>{
    return(
        <LoginStack.Navigator headerMode="none">
            <LoginStack.Screen name="LoginScreen" component={LoginScreen}/>
            <LoginStack.Screen name="SignUpScreen" component={SignUpScreen} />
            <LoginStack.Screen name="KategoriScreen"component={TabNavigator}/>
        </LoginStack.Navigator>
    )
}

const Stack= createStackNavigator()
const Navigation = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="KategoriScreen" component={KatergoriScreen} options={KategoriScreenOption}
            />
           <Stack.Screen
            name="MealsDetailScreen"
            component={MealsDetailScreen}
          /> 
        </Stack.Navigator>
    )
}

const ProfileStack = createStackNavigator()
const ProfileNavigation = () =>{
    return(
      <ProfileStack.Navigator>
          <ProfileStack.Screen name="Profiles" component={ProfileScreen} 
          //options={ProfileScreenOption} 
          />
      </ProfileStack.Navigator>
    )
}

const FilterStack = createStackNavigator();
const filterNavigations = () => {
  return (
    <FilterStack.Navigator>
      <FilterStack.Screen name="FilterStack" component={FilterScreen} 
      //options={FilterScreenOption} 
      />
    </FilterStack.Navigator>
  );
};

const StackFavotites = createStackNavigator();
const FavNavigator = () => {
  return (
    <StackFavotites.Navigator>
      <StackFavotites.Screen name="FavoriteScreen" component={FavoriteScreen} 
      options={FavoriteScreenOption} 
      />
      <StackFavotites.Screen
        name="MealsDetailScreen"
        component={MealsDetailScreen}
      />
    </StackFavotites.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeColor: Color.accentColor,
        barStyle: {
          backgroundColor: Color.primaryColor,
        },
      }}
    >
      <Tab.Screen
        name="Category"
        component={MainNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
                <MaterialIcons name="category" size={24} color="black" />
            );
          },
        }}
      />
      { <Tab.Screen
        name="Food Favorite"
        component={FavNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-star" size={25} color={Color.primaryColor} />
            );
          },
        }}
      /> }
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItemList {...props} />
            <Button
              title="Logout"
              color={Color.primary}
              onPress={() => {
                 props.navigation.navigate("LoginScreen");
              }}
            />
          </SafeAreaView>
        </View>
      );
    }}
    >
      <Drawer.Screen name="Category" component={Navigation}  options={{
          drawerIcon: (props) => (
            <MaterialIcons name="category" size={22} color={props.color} />
          ),
        }}/>
      <Drawer.Screen name="Filter" component={filterNavigations} options={{
          drawerIcon: (props) => (
            <Ionicons
              name={Platform.OS === "android" ? "md-color-filter" : "ios-color-filter"}
              size={23}
              color={props.color}
            />
          ),
        }}/>
        <Drawer.Screen name="Profile" component={ProfileNavigation}  options={{
          drawerIcon: (props) => (
            <Feather name="user-check" size={23}  color={props.color} />
          ),
        }}/>

      </Drawer.Navigator>
  );
};

export default Navigator = () =>{
    return(
        <NavigationContainer>
                <NavigationLogin/>
        </NavigationContainer>
    );
}