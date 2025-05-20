import MapView from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps

import {

    StyleSheet,
    View,
} from "react-native";


const MapScreen = () => {
    return (
        <View>
            <MapView
                style={styles.map}
                region={{
                    latitude: 51.9249992370605,
                    longitude: 4.46888875961304,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 400,
        width: 400,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default MapScreen;