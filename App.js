import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      Botao:'Iniciar',
      numero: 0
    };
    this.timer = null;
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  iniciar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer=null;
      this.setState({Botao: 'Iniciar'});
    } else{
      this.setState({Botao: 'Parar'});
      this.timer=  setInterval(()=>{
          this.setState({numero: this.state.numero+0.1})
      },100);
    }
  }
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer=null;
    }
    this.setState({
      numero:0,
      Botao:'Iniciar',
    })
  }
  render (){
    return(
        <View style={styles.container}>
          <Image 
          source={ require('./src/cronometro.png')} style={styles.cronometro}>

          </Image>
          <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>

          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.botao} onPress={this.iniciar}>
              <Text style={styles.btnTexto}>{this.state.Botao}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={this.limpar}>
              <Text style={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  cronometro:{
    width: 300,
    height: 300
  },
  timer:{
    marginTop: 50,
    color: '#fff',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  botao:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'

  }
});


export default App;