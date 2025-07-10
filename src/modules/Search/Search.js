import { Button, Card, PaperProvider, Searchbar, SegmentedButtons, Text  } from 'react-native-paper';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from '@gluestack-ui/themed';

export default function Search({route}) {
    const navigation = useNavigation()
    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = useState('top');
    const data = route.params.tripInfo
    return (
        <View style={styles.container}>

            <PaperProvider>
                <ScrollView>
               {data.map((trips, index) => <Card onPress={() => navigation.navigate('Reis', {screen: 'Reis Informatie', params:{tripInfo: trips}})
} style={styles.card} key={index}><Card.Content>
                <Text>{trips.legs[0].origin.actualDateTime.substring(11, 16)} {trips.fareRoute.origin.name} </Text>
                <Text>{trips.legs[0].destination.actualDateTime.substring(11, 16)} {trips.fareRoute.destination.name} </Text>
                
                </Card.Content>
                
                </Card>)}
            
                </ScrollView>
            </PaperProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 6
    },
    scene: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        backgroundColor: '#D1D3DF'
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginTop: 20
    },
    card: {
    marginTop: 10
    }
});
