import { ScrollView, View } from '@gluestack-ui/themed';
import { Icon,Text, List, PaperProvider, Divider, Button,} from 'react-native-paper';
import React, { useState } from 'react';
import Search from '../Search/Search';
export default function Info() {
    let lowest = 1
    let percentage = []
    let color = ""
    let trainSize = 70
    const [kismetCount, setCount] = useState(0);
    let recommendedCompartment = ""
    function lowestNumber(passengers, compartment){
        if (lowest == 1 || lowest > passengers){
            lowest = passengers
            recommendedCompartment = compartment
        }
        
    }
     async function getKismet() {
        try{
            const response = await fetch(`http://192.168.1.40:2501/devices/last-time/-10/devices.json`, {
                    method: 'GET',
                    // Request headers
                    headers: {
                             'Cookie' : 'Cookie_1=value; KISMET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9.eyJjcmVhdGVkIjoxNzQ3Mjk3NDM1LCJleHBpcmVzIjoxNzQ3MzgzODM1LCJpc3MiOiJraXNtZXQiLCJuYW1lIjoid2ViIGxvZ29uIiwicm9sZSI6ImFkbWluIn0.MqJHNlwSCohVPiGe-xA6hMVpIa1ku6Gt8p9EGhC7Rxw'
}
                })
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                  }
                  const json = await response.json();
                  
                   let count = (JSON.stringify(json).match(/Wi-Fi Client/g) || []).length;
                  console.log(count)
                   setCount(count)

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
        <List.Section title="15:07 Rotterdam Centraal spoor 4">
      <List.Accordion
        title="Intercity naar Eindhoven Centraal"
        left={props => <List.Icon {...props} icon="train" />}>

      <View alignContent='start' left={10}>
        <ScrollView horizontal={true}>
            <View>
                
<Icon
source="train"
color={randomColor("J")}
    size={50}/>
    <Text  alignSelf='center'>J</Text>
    <Text  alignSelf='center'>{percentage[0]}%</Text>
    </View>
    <View>
        
<Icon
source="train"
color={randomColor("K")}
    size={50}/>
    <Text  alignSelf='center'>K</Text>
    <Text  alignSelf='center'>{percentage[1]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("L")}
    size={50}/>
    <Text  alignSelf='center'>L</Text>
    <Text  alignSelf='center'>{percentage[2]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("M")}
    size={50}/>
    <Text  alignSelf='center'>M</Text>
    <Text  alignSelf='center'>{percentage[3]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("N")}
    size={50}/>
    <Text  alignSelf='center'>N</Text>
    <Text  alignSelf='center'>{percentage[4]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("O")}
    size={50}/>
    <Text  alignSelf='center'>O</Text>
    <Text  alignSelf='center'>{percentage[5]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("P")}
    size={50}/>
    <Text  alignSelf='center'>P</Text>
    <Text  alignSelf='center'>{percentage[6]}%</Text>
    
    </View>
    
    </ScrollView>
    <Text variant='titleMedium'>Aanbevolen vak: {recommendedCompartment}</Text>
    <Text variant='titleMedium'>Geschatte aantal plaatsen: {trainSize - kismetCount}</Text>
    <Button onPress={() => getKismet()}>refresh</Button>
    </View>
      </List.Accordion>
      <List.Section title="16:05 Eindhoven Centraal spoor 1"></List.Section>
    </List.Section>
    <Divider></Divider>
    <Text top={7} height={40} left={12} variant='titleMedium'>3 minuten lopen naar spoor 5</Text>
    <Divider></Divider>
    <List.Section title="16:30 Eindhoven Centraal spoor 5">
        
      <List.Accordion
        title="Sprinter richting Deurne"
        left={props => <List.Icon {...props} icon="train" />}>

      <View alignContent='start' left={10}>
        <ScrollView horizontal={true}>
            <View>
<Icon
source="train"
color={randomColor("J")}
    size={50}/>
    <Text  alignSelf='center'>J</Text>
    <Text  alignSelf='center'>{percentage[7]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("K")}
    size={50}/>
    <Text  alignSelf='center'>K</Text>
    <Text  alignSelf='center'>{percentage[8]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("L")}
    size={50}/>
    <Text  alignSelf='center'>L</Text>
    <Text  alignSelf='center'>{percentage[9]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("M")}
    size={50}/>
    <Text  alignSelf='center'>M</Text>
    <Text  alignSelf='center'>{percentage[10]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("N")}
    size={50}/>
    <Text  alignSelf='center'>N</Text>
    <Text  alignSelf='center'>{percentage[11]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("O")}
    size={50}/>
    <Text  alignSelf='center'>O</Text>
    <Text  alignSelf='center'>{percentage[12]}%</Text>
    </View>
    <View>
<Icon
source="train"
color={randomColor("P")}
    size={50}/>
    <Text  alignSelf='center'>P</Text>
    <Text  alignSelf='center'>{percentage[13]}%</Text>
    </View>
    </ScrollView>
    <Text variant='titleMedium'>Aanbevolen vak: {recommendedCompartment}</Text>
    <Text variant='titleMedium'>Geschatte aantal plaatsen: {trainSize - kismetCount}</Text>
    </View>
      </List.Accordion>
      <List.Section title="16:41 Station Helmond spoor 2"></List.Section>
    </List.Section>
    </ScrollView>
</PaperProvider>
    )
}