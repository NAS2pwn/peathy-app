import { useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { RouteParams } from "../navigation/RootNavigator"

export default function Pet() {
    const route = useRoute();
    return(
        <View>
            <Header />
            <View>
                
            </View>
            <View>

            </View>
            <View>

            </View>
        </View>
    )
}