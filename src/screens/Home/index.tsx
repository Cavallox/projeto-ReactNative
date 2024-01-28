import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';
import { useState } from 'react';

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [ParticipantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(ParticipantName)) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante na lista com esse nome'
      );
    }
    setParticipants((prevState) => [...prevState, ParticipantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string) {
      Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);

    console.log(`Você removeu o participante ${name}`);
  }

  

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quinta, 25 de Janeiro de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          value={ParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
