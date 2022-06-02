import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={estilo.container}>
    <Image style={estilo.logo} source={require("./assets/logo.png")}/>
    <Text style={estilo.nomeapp}>CÔMODO NERD</Text>
    <ScrollView>
      <Text style={estilo.titulo}>Melhores Jogos</Text>
      <StatusBar style="auto" />
      <Text style={estilo.jogo}>IT TAKE TWO - 2021</Text>
      <Image style={estilo.img} source={require("./assets/ittaketwo.jpeg")}/>
      <Text style={estilo.jogo}>HALO - 2021</Text>
      <Image style={estilo.img} source={require("./assets/halo.jpg")}/>
      <Text style={estilo.jogo}>RESIDENT EVIL VILLAGE - 2021</Text>
      <Image style={estilo.img} source={require("./assets/resident.jpg")}/>
      <Text style={estilo.jogo}>FORZA HORIZON 5 - 2021</Text>
      <Image style={estilo.img} source={require("./assets/forza.jpg")}/>
    </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252422',
    alignItems: 'center',

  },
  nomeapp:{
    fontSize:40,
    marginTop:10,
    marginBottom:10,
    fontWeight:"bold",
    color:"#eb5e28",
  },
  logo:{
    marginTop:40,
    width:100,
    height:100,
  },
  titulo:{
    textAlign:"center",
    fontSize:30,
    marginTop:5,
    color:"#fff",
  },
  img:{
    width:400,
    height:250,
    borderRadius:10,
  },
  jogo:{
    marginTop:20,
    fontSize:20,
    marginBottom:8,
    color:"#eb5e28",
    fontWeight:"bold",
  }
});
