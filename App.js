import { StyleSheet, Image, View, StatusBar, SafeAreaView, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorfont = "#C9D1D9";
const colordarkfont = "#4F565E";
const imagem = 'https://avatars.githubusercontent.com/u/97638604?v=4';
const urlgithub = 'https://github.com/waldyrssf'

export default function App() {

const handlePressGoToGithub = async ()=>{
  const res = await Linking.canOpenURL(urlgithub);
  if (res){
    await Linking.openURL(urlgithub);
  }
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
      <View style={styles.content}>
        <Image 
        accessibilityLabel='Foto pessoal de Waldyr' 
        style={styles.avatar} 
        source={{uri: imagem}}
        />
        <Text accessibilityLabel='Nome: Waldyr Soares' style={[styles.defaultText, styles.name]}>Waldyr Soares</Text>
        <Text accessibilityLabel='Nickname: waldyrssf' style={[styles.defaultText, styles.nickname]}>waldyrssf</Text>
        <Text accessibilityLabel='Descrição do perfil: Graduando em Sistemas para Internet | Graduado em Administração de empresas' 
        style={[styles.defaultText, styles.description]}>Graduando em Sistemas para Internet 
        
        </Text>
        <Text accessibilityLabel='Descrição do perfil:  Graduado em Administração de empresas' 
        style={[styles.defaultText, styles.description]}> 
        Graduado em Administração de empresas
        </Text>

        <Pressable onPress={handlePressGoToGithub}>

        <View style = {styles.button}>
          <Text style = {[styles.defaultText, styles.textButton]}>
            Ir para Github
          </Text>
        </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    //column
    flex: 1,
    backgroundColor: colorGithub,
    justifyContent: 'center',
    alignItems:"center",
    //flexDirection:'row',
  },
  content:{
    alignItems:"center",
    padding: 20,
  },
  text: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  avatar: {
    marginBottom: 10,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth:2
  },
  defaultText:{
    color: colorfont,
  },
  name:{
   marginTop:20,
   fontSize: 24, 
   fontWeight: "bold",
  
  },
  nickname:{
    fontSize: 18,
    color: colordarkfont,
  },
  description:{
    fontSize: 14,
    fontWeight:"bold",

  },
  button:{
    backgroundColor: colordarkfont,
    borderRadius: 10,
    padding: 20,
    marginTop: 50,
  },
  textButton:{
    fontSize: 16,
    fontWeight:"bold",
  }
});

//para quando atualizar: Tela de profile GITHUB- DIO
