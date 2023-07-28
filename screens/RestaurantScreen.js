import { View, Text, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme';
import { TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurant } from '../slices/restaurantSlice';
import { selectItems } from '../slices/cartSlice';

export default function RestaurantScreen() {
    const myRoute = useRoute();
    const params = myRoute.params;
    const navi = useNavigation();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setRestaurant({ ...params }))
    }, [])


    return (
        <View className='flex-1'>
            <StatusBar barStyle="light-content" />

            <CartIcon />
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 100
                }}>
                <View className="relative">

                    <StatusBar themeColors='white'></StatusBar>
                    <Image source={params.image} className="h-72 w-full"></Image>
                    <TouchableOpacity
                        onPress={() => navi.goBack()}
                        className="absolute rounded-full bg-white p-2 top-5 left-4">
                        <Icon.ArrowLeft stroke={themeColors.bgColor(1)} strokeWidth={3}></Icon.ArrowLeft>
                    </TouchableOpacity>
                </View>
                <ScrollView

                    className="rounded-t-3xl -mt-8 bg-white pb-36">
                    <View className="flex mt-3 ml-3" >
                        <View>
                            <Text className=" mb-2 text-4xl font-extrabold">{params.name}</Text>
                        </View>
                        <View className="flex-row mb-2 gap-2">
                            <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"></Image>
                            <Text>
                                ({params.reviews} review) <Text className=" font-bold text-gray-600">{params.category}</Text>
                            </Text>
                            <Icon.MapPin stroke="gray" width={20} height={20} />
                            <Text className=" text-gray-400 font-bold">Nearby {params.address}</Text>
                        </View>
                        <Text className="text-gray-600 text-m ">{params.description}</Text>
                        <Text className="text-2xl font-extrabold my-2">Menu</Text>
                        {
                            params.dishes.map((dish, index) =>
                                <DishRow
                                    key={index}
                                    item={dish}
                                />
                            )
                        }


                    </View>
                </ScrollView>
            </ScrollView>
        </View>
    )
}   