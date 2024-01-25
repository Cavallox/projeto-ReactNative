import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Você clicou no botão de adicionar!");
  }

  function handleParticipantRemove(name: string){
    console.log(`Você removeu o participante ${name}`) ;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Quinta, 25 de Janeiro de 2024.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Participant name='Felipe' onRemove={() => handleParticipantRemove("Felipe")}/>
      
    </View>
  );
}