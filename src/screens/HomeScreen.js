import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

const studentsData = [
  { id: 1, name: 'Joel Mena', carnet: '20220353', email: 'joelmena@gmail.com', bio: 'Estudiante de Ingeniería de Software apasionado por la inteligencia artificial y el desarrollo móvil.', photo: require('../img/joel.png') },
  { id: 2, name: 'Osmar Rodas', carnet: '20200167', email: 'osmarrodas@gmail.com', bio: 'Apasionado por la programación y las nuevas tecnologías, con experiencia en desarrollo web.', photo: require('../img/rodas.png') }
];

const StudentsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {studentsData.map(student => (
        <Card key={student.id} style={styles.card}>
          <Card.Content style={styles.cardContent}>
            <Card.Cover source={student.photo} style={styles.imagen} />
            <Title style={styles.title}>{student.name}</Title>
            <Paragraph style={styles.text}>Carnet: {student.carnet}</Paragraph>
            <Paragraph style={styles.bio}>{student.bio}</Paragraph>
            <View style={styles.contact}>
              <Text style={styles.emailLabel}>Email:</Text>
              <Text style={styles.email}>{student.email}</Text>
            </View>
            <Button 
              mode="contained" 
              style={styles.button}
            >
              Contactar
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e0f7fa',
  },
  card: {
    marginTop: 60,
    marginBottom: 20,
    width: 350,
    alignSelf: 'center',
    backgroundColor: '#37474f ',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  imagen: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 60,
    marginBottom: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  title: {
    color: '#000',
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    color: '#000',
    marginBottom: 10,
  },
  bio: {
    color: '#666',
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  emailLabel: {
    color: '#000',
    marginRight: 5,
  },
  email: {
    color: '#0000ff',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#00796b',
  }
});
export default StudentsScreen;
