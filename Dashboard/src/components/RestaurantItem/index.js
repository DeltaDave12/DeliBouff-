import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RestaurantItem = ({ restaurant }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Restaurant", { id: restaurant.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.restaurantContainer}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.subtile}>
            {restaurant.deliveryFee}€ &#8226; {restaurant.minDeliveryTime}-
            {restaurant.maxDeliveryTime} minutes
          </Text>
        </View>
        <View style={styles.rating}>
          <Text>{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#754c88",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  restaurantContainer: {
    width: "100%",
    marginVertical: 10,
    
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    borderRadius: 10,

  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtile: {
    color: "yellow",
    
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#be7cfd",
    borderRadius: 10,
    padding: 10,
    
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "#ad75de",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
