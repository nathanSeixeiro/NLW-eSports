import { useEffect, useState } from "react";
import { styles } from "./styles";
import * as Heading from "../../components/Heading";
import logo from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { View, Image, FlatList } from "react-native";
import { GameCardProps } from './../../components/GameCard/index';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    fetch("http://192.168.0.2:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Heading.Heading
        title="Find's your duo!"
        subtitle="Select the game you want to play"
      />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
