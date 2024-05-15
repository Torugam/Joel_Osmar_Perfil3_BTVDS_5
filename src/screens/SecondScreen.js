import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet,StatusBar } from 'react-native';
import Constants from 'expo-constants';

const favoriteFoods = [
  {
    id: 1,
    name: 'Ensalada de Quinoa y Verduras Asadas',
    description: 'Esta ensalada combina la quinoa, una excelente fuente de proteína vegetal, con verduras asadas como pimientos, calabacines y berenjenas. Se adereza con una vinagreta de limón y hierbas frescas para un toque de frescura..',
    image: require('../img/Quinoa.webp'),
  },
  {
    id: 2,
    name: 'Salmón al Horno con Espárragos y Patatas Asadas',
    description: 'El salmón es una excelente fuente de ácidos grasos omega-3, mientras que los espárragos y las patatas aportan fibra y nutrientes esenciales. Esta comida se hornea con hierbas aromáticas y un poco de aceite de oliva para una opción deliciosa y nutritiva.',
    image: require('../img/salmon.jpg'),
  },
  {
    id: 3,
    name: 'Tacos de Pollo con Guacamole y Salsa Fresca',
    description: 'Los tacos de pollo ofrecen proteína magra, mientras que el guacamole proporciona grasas saludables y la salsa fresca agrega un toque refrescante. Se pueden servir con tortillas integrales para aumentar el contenido de fibra.',
    image: require('../img/tacos.jpg'),
  },
  {
    id: 4,
    name: 'Bowl de Arroz Integral con Vegetales Salteados y Tofu Marinado',
    description: 'Este bowl está lleno de ingredientes saludables como el arroz integral, que proporciona carbohidratos complejos, vegetales salteados que aportan vitaminas y minerales, y tofu marinado para proteínas vegetales. Se puede aderezar con una salsa de soja baja en sodio para dar sabor sin exceso de sal.',
    image: require('../img/bolw.jpg'),
  },
  {
    id: 5,
    name: 'Hummus con Bastones de Zanahoria y Apio',
    description: 'El hummus, hecho principalmente de garbanzos, es rico en proteínas y fibra. Se puede servir con bastones de zanahoria y apio como opciones de snacks saludables, que agregan textura y nutrientes adicionales.',
    image: require('../img/hummus.jpg'),
  },
  {
    id: 6,
    name: 'Omelette de Claras de Huevo con Espinacas y Champiñones',
    description: 'Esta omelette es baja en grasas y calorías, ya que se hace principalmente con claras de huevo. Las espinacas y los champiñones añaden vitaminas y minerales, así como fibra adicional. Se puede complementar con una ensalada verde para aumentar el contenido de vegetales.',
    image: require('../img/omelette.jpg'),
  },
];
const statusBarHeight = Constants.statusBarHeight || StatusBar.currentHeight || 0;

const FavoriteFoodsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {favoriteFoods.map(food => (
        <View key={food.id} style={styles.foodContainer}>
          <Image source={food.image} style={styles.foodImage} />
          <Text style={styles.foodName}>{food.name}</Text>
          <Text style={styles.foodDescription}>{food.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:statusBarHeight,
    paddingHorizontal:10,
    backgroundColor: '#fff',
  },
  foodContainer: {
    marginBottom: 20,
  },
  foodImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  foodName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  foodDescription: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default FavoriteFoodsScreen;
