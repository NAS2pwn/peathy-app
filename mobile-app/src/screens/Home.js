import { useNavigation } from "@react-navigation/native";
import { Text, View, SectionList } from 'react-native';
import React from "react";

const pets = [
    {
        id: 1,
        name: "Ocarina",
        animal: "Cat",
    },
    {
        id: 2,
        name: "Odie",
        animal: "Dog"
    }
];

const gamelles = [
    {
        id: 1,
        name: "Gamelle du salon",
        connected: true,
    },
    {
        id: 2,
        name: "Gamelle du jardin",
        connected: true,
    }
];

export default function Home() {
    const navigation = useNavigation();

    const renderListPets = (pet) => {
        const onPetPress = () => {
            console.log(pet.name);
            navigation.navigate("Pet", {
                id: pet.id,
                title: pet.name,
                image: pet.animal,
            });
        }
        <PetListItem key={pet.id} onPress={onPetPress} profile={pet} />
    }

    const renderListGamelles = (gamelle) => {
        const onGamellePress = () => {
            console.log(gamelle.name);
            navigation.navigate("Gamelle", {
                id: gamelle.id,
                title: gamelle.name,
                opened: gamelle.opened,
            });
        }
        <GamelleListItem key={gamelle.id} onPress={onGamellePress} profile={gamelle} />
    }

    const listSeparator = () => (
        <View />
    );

    const DATA = [
        {
            title: "Mes ptits chous",
            renderItem: renderListPets,
            data : pets,
        },
        {
            title: "Gamelles",
            renderItem: renderListGamelles,
            data: gamelles,
        }
    ];

    return (
        <SafeAeraView>
            <View>
                <Text>Suuuuuuuuuuuuuuuuuu</Text>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={(section) => <View>{section.renderItem}</View>}
                    renderSectionHeader={(section) => (
                        <Text>{section.title}</Text>
                    )}
                />
            </View>
        </SafeAeraView>
    );
}