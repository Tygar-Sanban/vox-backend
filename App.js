import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  GoogleSignIn,
  GoogleSignInButton,
  statusCodes,
} from "ract-native-google-signin/google-signin";
import { useEffect, useState } from "react";

export default function App() {
  const [error, setError] = useState();
  const [userInfo, setUserInfo] = useState();

  const configureGoogleSignIn = () => {
    GoogleSignIn.configure({
      webClientId:
        "1009384218726-cqmrpcpvo6gc51nrnno1dth5o1qn7l2g.apps.googleusercontent.com",
      androidClientId:
        "1009384218726-k8inuog7vk797iqakor2kjl2vbi92hiq.apps.googleusercontent.com",
      iosClientId:
        "1009384218726-q07nsb96l4t8gehmurijh8leqj67up7f.apps.googleusercontent.com",
    });
  };

  useEffect(() => {
    configureGoogleSignIn();
  });

  const singIn = async () => {
    console.log("Pressed sign in !");

    try {
      await GoogleSignIn.hasPlayServices();
      const userInfo = await GoogleSignIn.signIn();
      setUserInfo(userInfo);
      setError();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <GoogleSignInButton
        size={GoogleSignInButton.Size.Standard}
        color={GoogleSignInButton.Color.Dark}
        onPress={signIn}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
