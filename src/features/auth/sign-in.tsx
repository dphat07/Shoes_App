import { localImages } from "@assets/images";
import Block from "@components/block";
import Button from "@components/button";
import Input from "@components/input";
import Row from "@components/row";
// import MainContainer from "@components/main-container";
import Text from "@components/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import theme, { makeStyles } from "@theme";
import { EDGES } from "@utils/helper";
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, Touchable, TouchableOpacity } from "react-native";
import MainContainer from "@components/main-container";

function SignIn({ navigation }) {
  const styles = useStyle();
  const { control, handleSubmit } = useForm({});
  const [error, setError] = useState(null);
  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <MainContainer edges={EDGES.LEFT_RIGHT}>
      <Block style={styles.container} backgroundColor={"whiteF5"}>
        <Block pl="_20" pt={"_80"}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={localImages().ic_back}></Image>
          </TouchableOpacity>
        </Block>
        <Text style={styles.headerText}>Hello Again!</Text>
        <Text style={[styles.subHeaderText, { marginBottom: 40 }]}>
          Welcome Back You've Been Missed!
        </Text>

        <Block marginHorizontal={"_28"} gap={"_15"} paddingBottom={"_20"}>
          <Input
            name="email"
            label="Email Address"
            placeholder="Your email..."
            labelStyle={styles.labelStyle}
            control={control}
          />
          <Input
            name="password"
            label="Password"
            placeholder="Your password..."
            labelStyle={styles.labelStyle}
            control={control}
            secureTextEntry={true}
          />
        </Block>
        <TouchableOpacity
          onPress={() => navigation.navigate("RecoveryPassword")}
        >
          <Text
            style={{
              color: "#707B81",
              alignSelf: "flex-end",
              paddingRight: 30,
            }}
          >
            Recovery Password
          </Text>
        </TouchableOpacity>
        <Button
          buttonStyle={styles.buttonStyle}
          label="Sign In"
          textStyle={{ color: "white", fontWeight: "bold" }}
          onPress={handleSubmit(handleSignIn)}
        />
        <Block>
          <Button
            style={styles.buttonGoogle}
            // onPress={signInGoogle}
            // disabled={isGoogleSubmitting}
          >
            <Image
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginRight: 10,
              }}
              source={localImages().ic_google}
            />
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 18 }}>
              Sign In With Google
            </Text>
          </Button>
        </Block>
        <Block
          flex={1}
          justifyContent={"flex-end"}
          alignItems={"center"}
          padding={"_30"}
        >
          <Row>
            <Text style={{ color: "#707B81", fontSize: 14 }}>
              Don't Have An Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text
                color={"black"}
                style={{ fontSize: 14, fontWeight: "bold" }}
              >
                Sign Up For Free
              </Text>
            </TouchableOpacity>
          </Row>
        </Block>
      </Block>
    </MainContainer>
  );
}

export default memo(SignIn);

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
  },

  headerText: {
    color: theme.colors.black,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "900",
    paddingVertical: 20,
  },
  subHeaderText: {
    textAlign: "center",
    fontSize: 16,
    color: theme.colors.grey6C,
  },
  labelStyle: {
    fontSize: 16,
    color: "black",

    marginBottom: 2,
    paddingTop: 6,
  },

  buttonStyle: {
    marginHorizontal: 28,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B9EE1",
    borderRadius: 50,
    marginTop: 20,
  },
  buttonGoogle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 30,
    height: 55,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: "white",
  },
}));
