import { Text, View } from "react-native";
import { s } from "./Home.style";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import { useEffect, useState } from "react";


export function Home({}) {
    const [coords, setCoords] = useState()

    useEffect(() => {
        getUserCoords()
    }, [])

    async function getUserCoords() {
        let { status } = await requestForegroundPermissionsAsync();
        if (status === "granted") {
          const location = await getCurrentPositionAsync();
          setCoords({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          });
        } else {
          setCoords({ lat: "48.85", lng: "2.35" });
        }
    }
    
    return (
        <>
        <View style={s.meteo_basic}>
            <Text style={{ fontSize: 60, color: "white" }}>Hello</Text>
        </View>
        <View style={s.searchbar_container}></View>
        <View style={s.meteo_advanced}></View>
        </>
    );
}