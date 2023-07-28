import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCard';

export default function FeatureRow(props) {
    const { title, description, restaurants } = props;
    return (
        <View>
            <View className="flex-row mt-6 mx-5">
                <View className="flex-1">
                    <Text className="font-extrabold text-xl">{title}</Text>
                    <Text className="text-gray-400">{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text(1) }} className="font-bold text-l">See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 15
                }}
                className="overflow-visible mt-3">
                {
                    restaurants.map((item, index) => {
                        return (
                            <RestaurantCard
                                key={index}
                                item={item} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}