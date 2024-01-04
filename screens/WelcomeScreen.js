// REACT
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

// THEME
import { themeColors } from '../theme';

export default function WelcomeScreen() {

  const navigation = useNavigation();

  return (

    <SafeAreaView className="flex-1" style={{ backgroundColor: themeColors.bg }}>

      <View className="flex-1 flex justify-around my-4">

        <Text className="text-white font-bold text-4xl text-center">Login App UI</Text>

        <View className="flex-row justify-center">
          <Image 
            source={require("../assets/images/welcome.png")}
            style={{ width: 350, height: 350 }} 
          />
        </View>

        <View className="space-y-4">

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            className="py-3 bg-green-500 mx-7 rounded-xl"
          >
            <Text className="text-xl font-bold text-center text-gray-800">Sign Up</Text>
          </TouchableOpacity>

          <View className="flex-row justify-center">

            <Text className="text-white font-semibold">Already have an account?</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text className="font-semibold text-green-400"> Log In</Text>
            </TouchableOpacity>

          </View>

        </View>

      </View>

    </SafeAreaView>
  );
}