import { localImages } from "@assets/images";
import Block from "@components/block";
import Button from "@components/button";
import Input from "@components/input";
import MainContainer from "@components/main-container";
import Row from "@components/row";
// import MainContainer from "@components/main-container";
import Text from "@components/text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import theme, { makeStyles } from "@theme";
import { EDGES } from "@utils/helper";
import axios from "axios";

import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, Touchable, TouchableOpacity } from "react-native";

function RecoveryPassword({ navigation }) {
  const styles = useStyle();
  const { control, handleSubmit } = useForm({});
  const [error, setError] = useState(null);
  const handleSignIn = async (data) => {};

  return (
    <MainContainer edges={EDGES.LEFT_RIGHT}>
      <Block style={styles.container} backgroundColor={"whiteF5"}>
        <Block pt="_80" pl="_20">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={localImages().ic_back}></Image>
          </TouchableOpacity>
        </Block>
        <Text style={styles.headerText}>Recovery Password</Text>
        <Text
          style={[
            styles.subHeaderText,
            { marginBottom: 40, textAlign: "center", marginHorizontal: 70 },
          ]}
        >
          Please Enter Your Email Address To Receive a Verification Code
        </Text>

        <Block marginHorizontal={"_28"} gap={"_15"} paddingBottom={"_20"}>
          <Input
            name="email"
            label="Email Address"
            placeholder="Your email..."
            labelStyle={styles.labelStyle}
            control={control}
          />
        </Block>
        <Button
          buttonStyle={styles.buttonStyle}
          label="Continue"
          textStyle={{ color: "white", fontWeight: "bold" }}
          onPress={handleSubmit(handleSignIn)}
        />
      </Block>
    </MainContainer>
  );
}

export default memo(RecoveryPassword);

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
  },

  headerText: {
    color: theme.colors.black,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "900",
    paddingTop: 100,
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
}));
