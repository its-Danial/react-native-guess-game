import { useCallback, useEffect, useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";

import GameScreen from "./src/screens/GameScreen";
import StartGameScreen from "./src/screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./helpers/constants/Colors";
import GameOverScreen from "./src/screens/GameOverScreen";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          "FiraCode-Bold": require("./assets/fonts/FiraCode-Bold.ttf"),
          "FiraCode-Regular": require("./assets/fonts/FiraCode-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const [pickedNumber, setPickedNumber] = useState<undefined | number>();
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickNumberHandler = (pickedNumber: number) => {
    setPickedNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameIsOverHandler = () => {
    setGameIsOver(true);
  };

  let currentScreen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (pickedNumber) {
    console.log(pickedNumber);

    currentScreen = <GameScreen userNumber={pickedNumber} onGameOver={gameIsOverHandler} />;
  }

  if (gameIsOver && pickedNumber) {
    currentScreen = <GameOverScreen />;
  }

  if (!appIsReady) {
    return null;
  }
  return (
    <LinearGradient onLayout={onLayoutRootView} colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: { opacity: 0.15 },
});
