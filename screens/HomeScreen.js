import { View, Text, TextInput, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import Catagories from '../components/Catagories'
import { featured } from '../constants'
import FeatureRow from '../components/FeatureRow'
export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">

            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'dark-content'}
            // hidden={hidden}
            />
            <View className="flex-row items-center space-x-2 px-4 mt-3 pb-4 ">
                <View className=" flex-row flex-1 items-center  px-1 pb-1.5 gap-2 rounded-full border border-slate-400	">
                    <Icon.Search stroke="gray" width={20} height={20} />
                    <TextInput placeholder='Restaurant' className=" flex-1"></TextInput>
                    <View className="flex-row space-x-1 border-0 px-2 border-l-2 border-gray justify-center items-center">
                        <Icon.MapPin stroke="gray" width={20} height={20} />
                        <Text>New York, NYC</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 bg-gray-300 rounded-full">
                    <Icon.Sliders strokeWidth={2.5} stroke="white" width={20} height={20} />
                </View>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            >

                <Catagories />

                <View className="mt-2">
                    {
                        featured.map((item, index) => {
                            return (
                                <FeatureRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )

                        })

                    }
                </View>

            </ScrollView>

        </SafeAreaView >

    )
}