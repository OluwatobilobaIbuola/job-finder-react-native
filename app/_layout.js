import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const Layout = () => {
  const [loaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  });
  const onLayoutView = useCallback(() => {
    const leaveScreen = async () => {
      SplashScreen.hideAsync();
    };
    if (loaded) {
      leaveScreen();
    }
  }, [loaded]);

  if (!loaded) return null;

  return <Stack onLayout={onLayoutView} />;
};

export default Layout;
