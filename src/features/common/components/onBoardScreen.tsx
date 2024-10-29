import Block from "@components/block";
import Button from "@components/button";
import MainContainer from "@components/main-container";
import Text from "@components/text";
import { makeStyles } from "@theme";
import { EDGES } from "@utils/helper";
import { Image, ImageSourcePropType } from "react-native";

type OnBoardingProps = {
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  buttonText: string;
  onPress: () => void;
};

function OnBoardScreen({
  imageSource,
  title,
  description,
  buttonText,
  onPress,
}: OnBoardingProps) {
  const styles = useStyle();
  return (
    <MainContainer edges={EDGES.LEFT_RIGHT}>
      <Block style={styles.container}>
        <Block>
          <Image
            source={imageSource}
            style={{
              resizeMode: "contain",
              alignItems: "center",

              height: 250,
              marginTop: 200,
              marginBottom: 70,
              marginHorizontal: 30,
            }}
          />
        </Block>
        <Block style={{ paddingBottom: 120 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </Block>
        <Block>
          <Button
            label={buttonText}
            onPress={onPress}
            style={{
              backgroundColor: "#5B9EE1",
              borderColor: "#5B9EE1",
              borderRadius: 50,
              width: 165,
              height: 54,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "flex-end",
              marginRight: 20,
            }}
            textStyle={{
              color: "white",
              fontWeight: "bold",
            }}
          ></Button>
        </Block>
      </Block>
    </MainContainer>
  );
}

export default OnBoardScreen;

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
    color: "black",
    paddingHorizontal: 20,
    width: 320,
  },
  description: {
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    color: "#707B81",
    width: 400,
  },
}));
