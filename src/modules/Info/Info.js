import { ScrollView, View } from '@gluestack-ui/themed';
import { Icon,Text, List, PaperProvider, Divider, Button, Card,} from 'react-native-paper';
import React, { useState } from 'react';
export default function Info({route}) {
    let lowest = 1
    let percentage = []
    let color = ""
    let trainSize = 50
    const [kismetCount, setCount] = useState(0);
    let recommendedCompartment = ""
    const data = route.params.tripInfo
    function lowestNumber(passengers, compartment){
        if (lowest == 1 || lowest > passengers){
            lowest = passengers
            recommendedCompartment = compartment
        }
        
    }
     async function getKismet() {
        try{
            const response = await fetch(`http://145.137.45.201:3000`, {
                    method: 'GET'
                })
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                  }
                  const json = await response.json();
                   setCount(json)

            }
                catch(error){
                    console.log(error)
                };
    }
    function randomColor(train){
        let random = Math.floor(kismetCount / trainSize *100)
        percentage.push(random)
        lowestNumber(random, train)
        if (random <= 30){
            color = "green"
            return color
        }
        if(random > 30 && random <= 60){
            color = "orange"
            return color
        }
        else{
            color = "red"
            return color
        }
    }

    return(
    <PaperProvider>
        <ScrollView>
            <Card>
        <List.Section title={data.legs[0].origin.actualDateTime.substring(11, 16) + " " + data.fareRoute.origin.name}>
      <List.Accordion
        title={"Intercity richting " + data.fareRoute.destination.name}
        left={props => <List.Icon {...props} icon="train" />}>
      <View alignContent='start' left={10}>
        <ScrollView horizontal={true}>
            <View>   
<Icon
source="train"
color={"green"}
    size={50}/>
    <Text  alignSelf='center'>J</Text>
    <Text  alignSelf='center'>{22}%</Text>
    </View>
    <View>
        
<Icon
source="train"
color={"orange"}
    size={50}/>
    <Text  alignSelf='center'>K</Text>
    <Text  alignSelf='center'>{60}%</Text>
    </View>
    <View>
<Icon
source="train"
color={"red"}
    size={50}/>
    <Text  alignSelf='center'>L</Text>
    <Text  alignSelf='center'>{80}%</Text>
    </View>
    <View>
<Icon
source="train"
color={"orange"}
    size={50}/>
    <Text  alignSelf='center'>M</Text>
    <Text  alignSelf='center'>{55}%</Text>
    </View>
    <View>
<Icon
source="train"
color={"orange"}
    size={50}/>
    <Text  alignSelf='center'>N</Text>
    <Text  alignSelf='center'>{63}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("O")}
    size={50}/>
    <Text  alignSelf='center'>O</Text>
    <Text  alignSelf='center'>{percentage[0]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={"green"}
    size={50}/>
    <Text alignSelf='center'>P</Text>
    <Text alignSelf='center'>{10}%</Text>
    </View>
    </ScrollView>
    <Text variant='titleMedium'>Aanbevolen vak: P</Text>
    <Text variant='titleMedium'>Geschatte aantal plaatsen: 45</Text>
    <Button onPress={() => getKismet()}>refresh</Button>
    </View>
      </List.Accordion>
      <List.Section title={data.legs[0].destination.actualDateTime.substring(11, 16) + " " + data.fareRoute.destination.name}></List.Section>
    </List.Section>
    </Card>
    </ScrollView>
</PaperProvider>
    )
}