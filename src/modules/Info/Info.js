import { ScrollView, View } from '@gluestack-ui/themed';
import { Icon,Text, List, PaperProvider, Divider, Button,} from 'react-native-paper';
import React, { useState } from 'react';
export default function Info() {
    let lowest = 1
    let percentage = []
    let color = ""
    let trainSize = 50
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
                             'Cookie' : 'Cookie_1=value; KISMET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9.eyJjcmVhdGVkIjoxNzUxNDA2MTA4LCJleHBpcmVzIjoxNzUxNDkyNTA4LCJpc3MiOiJraXNtZXQiLCJuYW1lIjoid2ViIGxvZ29uIiwicm9sZSI6ImFkbWluIn0.-10BUjMsjwrZr4p_TB4XdrSmjZyVBBPMUWORoqrJ4UE'
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
    <Text variant='titleMedium'>Aanbevolen vak: {recommendedCompartment}</Text>
    <Text variant='titleMedium'>Geschatte aantal plaatsen: {trainSize - kismetCount}</Text>
    <Button onPress={() => getKismet()}>refresh</Button>
    </View>
      </List.Accordion>
      <List.Section title="16:05 Eindhoven Centraal spoor 1"></List.Section>
    </List.Section>
    </ScrollView>
</PaperProvider>
    )
}