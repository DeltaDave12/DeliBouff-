import { View, Text, StyleSheet, Image } from "react-native";

const DishListItem = ({ dish }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {dish.description}
        </Text>
        <Text style={styles.price}> {dish.price}€</Text>
      </View>
      {dish.image && (
        <Image source={{ uri: dish.image }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    
    flexDirection: "row",
    backgroundColor: "#be7cfd",
    borderRadius: 10,
    
    
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    letterSpacing: 0.5,
    paddingLeft: 10,
  },
  description: {
    color: "#ff7f00",
    marginVertical: 5,
    paddingLeft: 10,
  },
  price: {
    fontSize: 16,
    paddingLeft: 10,
  },
  image: {
    height: 75,
    aspectRatio: 1,
  },
});

export default DishListItem;
