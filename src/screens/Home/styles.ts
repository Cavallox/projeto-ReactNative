import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#310552',
        padding: 24,
    },
    eventName: {
      color:'#ffffff',
          fontSize: 24,
          fontWeight:  'bold',
          marginTop: 48
    },
    eventDate: {
      color:'#d3d3d3',
      fontSize: 16,
    },

    input: {
      flex: 1,
      height: 56,
      backgroundColor: '#1f1e25',
      borderRadius: 5,
      color: '#fdfcfe',
      padding: 16,
      fontSize: 16,
      marginRight: 12,
    },

    buttonText: {
      color: '#ffffff',
      fontSize: 24,
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31cf67',
      alignItems: 'center',
      justifyContent: 'center',
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
      
    }
  })