import { Button, PaperProvider, Searchbar, SegmentedButtons, Text  } from 'react-native-paper';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Search({navigation}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [value, setValue] = useState('top');
    
    return (
        <View style={styles.container}>
            <Searchbar placeholder='zoeken' value={searchQuery} onChangeText={setSearchQuery} style={styles.inputField} />

            <PaperProvider>
                <SegmentedButtons 
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: 'Vertrek Nu',
                            label: 'Vertrek Nu'
                        },
                        { 
                            value: 'Reis Opties',
                            label: 'Reis Opties'
                        }
                    ]}
                />

                <View style={styles.item}>
                    <Button mode="outlined" width={350} onPress={() => navigation.navigate('15:07 -> 16:06')}>
                   <Text variant='titleLarge'>14:07 -{'>'} 15:41</Text>
                    </Button>
                </View>
                <View style={styles.item}>
                    <Button mode="outlined" width={350} onPress={() => navigation.navigate('15:07 -> 16:06')}>
                   <Text variant='titleLarge'>15:07 -{'>'} 16:41</Text>
                    </Button>
                </View>
                <View style={styles.item}>
                    <Button mode="outlined" width={350} onPress={() => navigation.navigate('15:07 -> 16:06')}>
                   <Text variant='titleLarge'>16:07 -{'>'} 17:41</Text>
                    </Button>
                </View>
                <View style={styles.item}>
                    <Button mode="outlined" width={350} onPress={() => navigation.navigate('15:07 -> 16:06')}>
                   <Text variant='titleLarge'>17:07 -{'>'} 18:41</Text>
                    </Button>
                </View>

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
    }
});
