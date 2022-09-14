import { View, Image, FlatList } from "react-native";
import logo from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { GAMES } from "./../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Heading
        title="Find's your duo!"
        subtitle="Select the game you want to play"
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
