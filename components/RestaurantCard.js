import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';

export default function RestaurantCard({ item }) {
    const navi = useNavigation();
    let dispatch = useDispatch;
    const handleRes = () => {
        dispatch(setRestaurant({ ...item }))
    }
    return (
        <TouchableWithoutFeedback
            onPress={() => navi.navigate('Restaurant', { ...item })}>

            <View style={{
                shadowRadius: 7
            }}
                className="bg-white mx-3 rounded-3xl drop-shadow-2xl">
                <Image className="h-36 w-64 rounded-t-3xl " source={item.image}></Image>
                <View className="flex mt-3 ml-3" >
                    <View>
                        <Text className=" mb-2 text-xl font-extrabold">{item.name}</Text>
                    </View>
                    <View className="flex-row mb-2 gap-2">
                        <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"></Image>
                        <Text>
                            ({item.reviews} review) <Text className=" font-bold text-gray-600">{item.category}</Text>
                        </Text>
                    </View>
                    <View className="flex-row  text-gray-500">
                        <Icon.MapPin stroke="gray" width={20} height={20} />
                        <Text className=" ml-2 text-gray-400 font-bold">Nearby {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}