import { Avatar, Card, Divider, Text, Modal, Searchbar, PaperProvider, Icon, Button} from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import { jsx } from 'react/jsx-runtime';

export default function Home() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchQuery2, setSearchQuery2] = React.useState('');
    const [stations1, setStation1] = React.useState([])
    const [stations2, setStation2] = React.useState([])
    const [cardSwitch, setCardSwitch] = React.useState(true)
    const [trainRoutes, setTrainRoutes] = React.useState([])
    const [routeFound, setRouteFound] = React.useState(false)

    async function findRoute() {
        try{
            const response = await fetch(`https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?fromStation=${searchQuery}&toStation=${searchQuery2}&originWalk=false&originBike=false&originCar=false&destinationWalk=false&destinationBike=false&destinationCar=false&shorterChange=false&travelAssistance=false&searchForAccessibleTrip=false&localTrainsOnly=false&excludeHighSpeedTrains=false&excludeTrainsWithReservationRequired=false&discount=NO_DISCOUNT&travelClass=2&passing=false&travelRequestType=DEFAULT`, {
                    method: 'GET',
                    // Request headers
                    headers: {
                        'Cache-Control': 'no-cache',
                        'Ocp-Apim-Subscription-Key': '06ed0ef30d6c400b9ed9f7a9de54f402',}
                })
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                  }
                  const json = await response.json();
                  setTrainRoutes(json.trips)
                  console.log(json.trips)
                  setRouteFound(true)
            }
                catch(error){
                    console.log(error)
                };
        
    }

   async function getStations1(q){
    setRouteFound(false)
    if(q == 1 ){
        setStation1([])
        setCardSwitch(true)
    }
    else{
        setStation2([])
        setCardSwitch(false)
    }
    if(q === 1 && searchQuery.length < 2 ){return}
    if(q != 1 && searchQuery2.length < 2 ){return}
    let newstation = []
    try{
        const response = await fetch(`https://gateway.apiportal.ns.nl/nsapp-stations/v3?q=${cardSwitch ? searchQuery : searchQuery2}&includeNonPlannableStations=false&countryCodes=nl&limit=10`, {
                method: 'GET',
                // Request headers
                headers: {
                    'Cache-Control': 'no-cache',
                    'Ocp-Apim-Subscription-Key': '06ed0ef30d6c400b9ed9f7a9de54f402',}
            })
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
              }
              const json = await response.json();
              for(let station of json.payload){
                newstation.push(station.names.long)
              }
              if(q == 1) {setStation1(newstation)}
              else{setStation2(newstation)}
        }
            catch(error){
                console.log(error)
            };
    
}
    return(
        <PaperProvider>
            <Card>
                <Card.Content>
                <Searchbar
      placeholder="Van"
      onChangeText={setSearchQuery}
      onChange={() => getStations1(1)}
      value={searchQuery}
    />
    <Divider/>
                   <Searchbar
      placeholder="Naar"
      onChangeText={setSearchQuery2}
      onChange={() => getStations1(2)}
      value={searchQuery2}
    />
                </Card.Content>
                <Button mode="contained" onPress={() => findRoute()}>Zoek</Button>
            </Card>
            <Card>
                <Card.Content>
                { routeFound ? (trainRoutes.forEach((key, route) => <Text key={key}>{route}</Text>))
        : cardSwitch ? (stations1.map((station, index) => (
        <Button key={index} onPress={() => setSearchQuery(station)}>{station}</Button>
    ))) : !cardSwitch ? (stations2.map((station, index) => (
        <Button key={index} onPress={() => setSearchQuery2(station)}>{station}</Button>
    ))) : ""}
                </Card.Content>
            </Card>
        </PaperProvider>  
        
    );

}