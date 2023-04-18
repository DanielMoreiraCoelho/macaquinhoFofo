import * as React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Header } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import db from "./localDb";
import MacacoPhone from "./Componentes/MacacoPhone";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "", chunks: [], phones: [] };
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor="#9c8210"
            centerComponent={{
              text: "macaquinho fofo",
              style: { color: "#fff", fontSize: 20 },
            }}
          />
          <Image
            style={styles.imageIcon}
            source={{
              uri: "https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png",
            }}
          />
          <TextInput
            style={styles.imputBox}
            onChangeText={(t) => {
              this.setState({ text: t });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
              this.setState({ phones: db[this.state.text].phones });
            }}
          >
            <Text style={styles.buttonText}>ir</Text>
          </TouchableOpacity>

          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <MacacoPhone
                  silabas={this.state.chunks[index]}
                  fonema={this.state.phones[index]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8b8b8",
  },
  imputBox: {
    marginTop: 200,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: { textAlign: "center", fontSize: 30, fontWeight: "bold" },
  displayText: { textAlign: "center", fontSize: 30 },

  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  },
});
