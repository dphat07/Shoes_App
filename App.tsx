import theme, { ThemeProvider } from "@theme";
import OnBoardScreen from "@features/common/components/onBoardScreen";
import onBoardingData from "@features/common/components/onBoarding";
import { useState } from "react";
import SignIn from "@features/auth/sign-in";
import SignUp from "@features/auth/components/sign-up";
import RecoveryPassword from "@features/auth/components/recoveryPassword";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@features";
import { CategoryProvider } from "@components/context/categoriesContext";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onBoardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    }
  };

  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();
  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <NavigationContainer>
          {/* <OnBoardScreen
        imageSource={onBoardingData[currentIndex].imageSource}
        title={onBoardingData[currentIndex].title}
        description={onBoardingData[currentIndex].description}
        buttonText={currentIndex === 0 ? "Get Started" : "Next"}
        onPress={handleNext}
        /> */}
          <Stack.Navigator>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecoveryPassword"
              component={RecoveryPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CategoryProvider>
    </ThemeProvider>
  );
}
