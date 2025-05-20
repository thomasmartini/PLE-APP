import React from 'react';
import { List, PaperProvider } from 'react-native-paper';



export default function Account() {
    return (
        <PaperProvider>
        <List.Section>
    <List.Item title="Mijn NS" left={() => <List.Icon icon="account" />} />
    <List.Item title="Mijn tickets" left={() => <List.Icon  icon="card" />}/>
    <List.Item title="Kaartverkoop" left={() => <List.Icon  icon="cart" />}/>
    <List.Item title="Abonnementen" left={() => <List.Icon  icon="folder" />}/>
    <List.Item title="Taxi boeken" left={() => <List.Icon  icon="taxi" />}/>
    <List.Item title="Deelvervoer" left={() => <List.Icon  icon="car" />}/>
    <List.Item title="Hulp" left={() => <List.Icon  icon="information" />}/>
    <List.Item title="Meld overlast of agressie" left={() => <List.Icon icon="whatsapp" />}/>
    <List.Item title="Instellingen" left={() => <List.Icon  icon="cog" />}/>
    <List.Item title="Nieuws en aanbiedingen" left={() => <List.Icon  icon="newspaper" />}/>
    <List.Item title="Treinradar" left={() => <List.Icon  icon="train" />}/>
    <List.Item title="Hoe is je reis?" left={() => <List.Icon  icon="bag-checked" />}/>
  </List.Section>
  </PaperProvider>
    );
}

