import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Pet from "../screens/Pet";
import Gamelle from "../screens/Gamelle";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Pet" component={Pet} />
                <Stack.Screen name="Gamelle" component={Gamelle} />
            </Stack.Group>
        </Stack.Navigator>
    )
}