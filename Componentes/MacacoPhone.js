import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Audio } from "expo-av";

export default class MacacoPhone extends React.Component {
  playSound = async (phone) => {
    var soundLink =
      "https://s3-whitehatjrcontent.whjr.online/phones/" + phone + ".mp3";
    await Audio.Sound.createAsync({ uri: soundLink }, { shouldPlay: true });
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.chunkButton}
        onPress={() => {
          this.playSound(this.props.fonema);
        }}
      >
        <Text style={styles.displayText}>{this.props.silabas}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  chunkButton: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "red",
  },
});
