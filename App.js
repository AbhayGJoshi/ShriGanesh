import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert,TouchableHighlight } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('./img/sg.png')}/>
      
      </View>
      
      <Text style={{margin:20, color:"red"}}>Shri Ganeshay Namaha!</Text>
      <Button 
        title="Namaha"
        color={"#841584"}
        onPress={

          () => {

            Alert.alert("||Shri Ganeshay Namaha||");
 
           }
          
        }
        >
        
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
