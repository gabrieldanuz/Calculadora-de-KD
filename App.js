import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image } from 'react-native';

export default function App() {
  const [kill, setKill] = useState(0);
  const [death, setDeath] = useState(0);
  const [kdAtual, setKdAtual] = useState(0);
  const [kdPrevisto, setKdPrevisto] = useState(0);

  async function calcular(){
    if(kill === 0 || death === 0) {
      alert('Favor acrescentar um valor');
      return;
    }

    let resultado = (kill/(kill+death))*100;
    setKdAtual(resultado);
    console.log(resultado)

    Keyboard.dismiss();
  }  

  async function previsao(){

    let resultadoPrevisao = (kill/(kill+death))*100;
    setKdPrevisto(resultado);
    //console.log(resultado)

    Keyboard.dismiss();
  }  

return (
    <View style={styles.container}>
      <Image
      style={styles.Image} 
      source={require('../KDA/assets/logoPb.png')}
      />
      <View style={styles.areaKill}>
            <Text style={styles.titulo}>
            Digite a quantidade de Kill's
            </Text>
            <TextInput 
            style={styles.input}
            placeholder="Ex: 150"
            keyboardType='numeric'
            onChangeText={(valor) => setKill(valor)}
            />
            <Text style={styles.titulo}>
            Digite a quantidade de Death's
            </Text>
            <TextInput 
            style={styles.input}
            placeholder="Ex: 150"
            keyboardType='numeric'
            onChangeText={(valor) => setDeath(valor)}
            />
        </View>

        <TouchableOpacity style={styles.botaoArea} 
          onPress={calcular}
          >
            <Text style={styles.botaoTexto}>Calcular</Text>
          </TouchableOpacity>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101215',
    alignItems: 'center',
    paddingTop: 50,
  },
  Image: {
    width: '90%',
    height: 400,
    marginBottom: 10
  },
  areaKill: {
    width: '90%',
    backgroundColor: '#F9F9F9',
    paddingBottom: 9,
    paddingTop: 9
  },
    titulo: {
    fontSize: 15,
    color: '#000',
    paddingTop: 5,
    paddingLeft: 5
  },
  botaoArea: {
    width: '90%',
    backgroundColor: '#141729',
    height: 45,
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 17,
    color: '#FFF',
    fontWeight: 'bold'
  },
  areaResultado: {
    width: '90%',
    backgroundColor: '#FFF',
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25
  },
});
