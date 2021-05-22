import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import Input from "../component/Input"
import Submit from "../component/Submit"

const SignUp = (props) => {

  

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Image
          source={require("../assets/signup.png")}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Ayo Mulai</Text>
        <Text style={styles.textBody}>
          Buat akun untuk mendapatkan semua fitur
        </Text>
        <Input 
          name="Name" 
          icon="user" 
          onChangeText={Name=>this.setState({Name})}
        />
        <Input 
          name="Email" 
          icon="envelope" 
        />
        <Input 
          name="Phone" 
          icon="phone" 
        />
        <Input 
          name="Password" 
          icon="lock"
          pass={true} 
        />
        <Input 
          name="Confirm Password" 
          icon="lock" 
          pass={true} 
        />
        <Submit
          color="#0251ce"
          title="CREATE"
          clidked={() => {
          
            props.navigation.navigate("KategoriScreen");
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textBody}>Sudah punya akun? </Text>
          <Text
            style={[styles.textBody, { color: "blue" }]}
            onPress={() => props.navigation.navigate("LoginScreen")}
          >
            Masuk disini
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
 container:{
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
 },
 image:{
     width: 400,
     height:300,
     marginVertical: 10
 },
 textTitle:{
     fontSize: 30,
     marginVertical: 5
 },
 textBody:{
     fontSize: 16,
     marginVertical: 5
 }
});

export default SignUp;