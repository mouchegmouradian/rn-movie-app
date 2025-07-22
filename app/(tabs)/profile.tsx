import { icons } from "@/constants/icons"
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const Profile = () => {
  return (
    <View className="flex-1 bg-primary px-10 pt-10">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-2">
          <Image source={icons.person} className="size-10" tintColor="#fff" />
          <Text className="text-white text-lg font-semibold">John Doe</Text>
        </View>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
