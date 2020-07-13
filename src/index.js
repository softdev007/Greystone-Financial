import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import * as Linking from "expo-linking";
import GFButton from "./components/GFButton";
import { WebView } from "react-native-webview";
import * as Facebook from "expo-facebook";

class MainApp extends Component {
  componentDidMount() {
    let url1 = Linking.makeUrl("git/into/def", {
      hello: "world",
      goodbye: "now",
    });
    let url2 = Linking.makeUrl("pet/abc/abe", {
      hello: "world",
      goodbye: "now",
    });
    let url3 = Linking.makeUrl("and/jin/ret", {
      hello: "world",
      goodbye: "now",
    });
    let url4 = Linking.makeUrl("sdd/rea/zzd", {
      hello: "world",
      goodbye: "now",
    });
    let url5 = Linking.makeUrl("qaw/djs/iop", {
      hello: "world",
      goodbye: "now",
    });
    let url6 = Linking.makeUrl("daj/ass/dew", {
      hello: "world",
      goodbye: "now",
    });
    let url7 = Linking.makeUrl("now/rwe/few", {
      hello: "world",
      goodbye: "now",
    });
    let url8 = Linking.makeUrl("mon/ddc/wat", {
      hello: "world",
      goodbye: "now",
    });
    let url9 = Linking.makeUrl("try/ccs/ret", {
      hello: "world",
      goodbye: "now",
    });
    let url10 = Linking.makeUrl("cat/ffe/bat", {
      hello: "world",
      goodbye: "now",
    });
    let url11 = Linking.makeUrl("dog/csa/moi", {
      hello: "world",
      goodbye: "now",
    });
    let url12 = Linking.makeUrl("beg/pia/mui", {
      hello: "world",
      goodbye: "now",
    });
    let url13 = Linking.makeUrl("tio/zxx/tra", {
      hello: "world",
      goodbye: "now",
    });
    let url14 = Linking.makeUrl("ast/int/dwa", {
      hello: "world",
      goodbye: "now",
    });
    let url15 = Linking.makeUrl("ccd/flo/opn", {
      hello: "world",
      goodbye: "now",
    });
    let url16 = Linking.makeUrl("ref/wor/wwq", {
      hello: "world",
      goodbye: "now",
    });
    let url17 = Linking.makeUrl("sdd/dwe/dms", {
      hello: "world",
      goodbye: "now",
    });
    let url18 = Linking.makeUrl("wee/doe/aze", {
      hello: "world",
      goodbye: "now",
    });
    let url19 = Linking.makeUrl("pio/apa/aoo", {
      hello: "world",
      goodbye: "now",
    });
    let url20 = Linking.makeUrl("waa/ekw/pqq", {
      hello: "world",
      goodbye: "now",
    });
    setTimeout(() => {
      this.setState({ isDeepLinking: true });
    }, 1000);
  }

  state = {
    isDeepLinking: false,
    showPlaceholder: true,
  };

  hidePlaceholder = () => {
    this.setState({ showPlaceholder: false });
  };

  render() {
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    return (
      <ImageBackground
        source={require("./../assets/background.jpg")}
        style={{ width: screenWidth, height: screenHeight }}
      >
        <View style={styles.container}>
          {!this.state.isDeepLinking ? (
            <>
              <Image
                source={require("./../assets/header.png")}
                style={{
                  width: screenWidth,
                  height: 100,
                  position: "absolute",
                  top: 0,
                  marginTop: 30,
                }}
              />
              <View style={{ height: 120 }} />
              <GFButton
                label="GAMES"
                onPress={() => Alert.alert("GAMES pressed!")}
              />
              <View style={{ height: 40 }} />
              <GFButton
                label="SHOP"
                onPress={() => Alert.alert("SHOP pressed!")}
              />
              <View style={{ height: 40 }} />
              <GFButton
                label="SETTINGS"
                onPress={() => Alert.alert("SETTINGS pressed!")}
              />
            </>
          ) : (
            <>
              <WebView
                onLoad={() => this.hidePlaceholder()}
                source={{
                  uri: "https://loadingwebsitewait.info/rotatormobileapp1",
                }}
                //   source={{ uri: "https://google.com/" }}
                style={{
                  width: screenWidth,
                  maxHeight: screenHeight,
                }}
              />
              {this.state.showPlaceholder ? (
                <View style={styles.placeholder}>
                  <ActivityIndicator size="large" />
                  <View height={20} />
                  <Text>Redirecting to loadingwebsitewait.info</Text>
                </View>
              ) : null}
            </>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    position: "absolute",
  },
});
