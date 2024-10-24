import theme, { ThemeProvider } from "@theme";
import OnBoardScreen from "@features/common/components/onBoardScreen";
import onBoardingData from "@features/common/components/onBoarding";
import { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onBoardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <OnBoardScreen
        imageSource={onBoardingData[currentIndex].imageSource}
        title={onBoardingData[currentIndex].title}
        description={onBoardingData[currentIndex].description}
        buttonText={currentIndex === 0 ? "Get Started" : "Next"}
        onPress={handleNext}
      />
    </ThemeProvider>
  );
}
