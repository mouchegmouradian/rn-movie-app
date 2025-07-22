import { icons } from "@/constants/icons"
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

const Saved = () => {
  return (
    <View className="flex-1 bg-primary px-10 pt-10">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-x-2">
          <Image source={icons.save} className="size-10" tintColor="#fff" />
          <Text className="text-white text-lg font-semibold">Saved</Text>
        </View>
      </View>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})
