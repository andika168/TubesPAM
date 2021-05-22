import React, {useState} from 'react'
import {View,Text,ScrollView,Image,StyleSheet} from 'react-native'
import Inputs from '../component/Input';
import Submit from '../component/Submit';

const LoginScreen = props =>{
    return (
        <ScrollView style={{ backgroundColor: "white" }}>
          <View style={styles.container}>
            <Image
              source={require("../assets/koki.png")}
              resizeMode="center"
              style={styles.image}
            />
            <Text style={styles.textTitle}>Selamat Datang Di Resep-I</Text>
            <Text style={styles.textBody}>Masuk ke akun yang sudah ada</Text>
            <View style={{ marginTop: 20 }} />
            <Inputs 
              name="Email" 
              icon="user" 
            />
            <Inputs 
              name="Password" 
              icon="lock" 
              pass={true} 
            />
            <Submit
              title="LOG IN"
              color="#0148a4"
              clidked={() => {
                props.navigation.navigate('KategoriScreen')
              }}
            />
            <View style={{ flexDirection: "row", marginVertical: 5 }}>
              <Text style={styles.textBody}>Belum Punya Akun? </Text>
              <Text
                style={[styles.textBody, { color: "blue" }]}
                onPress={() => 
                    props.navigation.navigate('SignUpScreen')    
                }
              >
                  Daftar
              </Text>
            </View>
          </View>
        </ScrollView>
      );
    };

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image:{
        width: 400,
        height: 300,
        marginVertical: 10
    },
    textTitle:{
        fontSize: 30,
        marginVertical:10
    },
    textBody:{
        fontSize: 16
    }
    
})
export default LoginScreen