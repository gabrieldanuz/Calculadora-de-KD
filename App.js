import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Image, FlatList } from 'react-native';

import ResultKDA from './src/ResultKDA';

export default function App () {
  const [kill, setKill] = useState(0);
  const [death, setDeath] = useState(0);
  const [kdAtual, setKdAtual] = useState(0);
  const [kdPrevisto, setKdPrevisto] = useState(0);
  const [mensagem, setMensagem] = ('Sabe jogar Noob?')

  async function calcular(){
    if(kill === 0 || death === 0 || kill === '' || death === '') {
      alert('Vishhh, esqueceu de preencher, parça!');
      return;
    }

    let soma = Number(kill) + Number(death);
    let soma2 = (kill*100);
    let resultado = (soma2 / soma).toFixed(2);

    setKdAtual(resultado)

    console.log(resultado)
    Keyboard.dismiss();
  }  

  async function limparKdAtual(){
    setKdAtual('')
    alert('Tá na mão, noob!')
  }

  async function previsao(){
    //setKdPrevisto(resultado);
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

        <View style={styles.areaResultado}>
          <Text style={{fontWeight: 'bold'}}>KD:</Text>
        <ResultKDA ResultKDA={kdAtual} />
        </View>
        <TouchableOpacity style={styles.botaoArea} 
          onPress={limparKdAtual}
          >
            <Text style={styles.botaoTexto}>Limpar</Text>
          </TouchableOpacity>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 50,
  },
  Image: {
    width: '90%',
    height: 350,
    marginBottom: 10
  },
  areaKill: {
    width: '90%',
    backgroundColor: '#FFF',
    paddingBottom: 9,
    paddingTop: 9,
    padding: 5
  },
    titulo: {
    fontSize: 15,
    color: '#141729',
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
  kdAtual:{
    marginTop: 10,
    color: '#FFF',
    fontSize: 18,
  }
});
