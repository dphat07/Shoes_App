import { localImages } from "@assets/images";
import Block from "@components/block";
import MainContainer from "@components/main-container";
import Row from "@components/row";
import theme, { makeStyles } from "@theme";
import { EDGES } from "@utils/helper";
import { memo, useState } from "react";
import { FlatList, Image, TouchableOpacity } from "react-native";
import { useCategories } from "@components/context/categoriesContext";
import Text from "@components/text";

function Home() {
  const styles = useStyle();
  const { categories } = useCategories();
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

  const renderCategory = ({ item }: { item: (typeof categories)[number] }) => {
    const isSelected = item.id.toString() === selectedId;
    const backgroundColor = isSelected ? "#5B9EE1" : "#D3D3D3";
    const textColor = isSelected ? "#FFFF" : "#0000";

    return (
      <Block pt={"_30"}>
        <TouchableOpacity
          onPress={() => setSelectedId(item.id.toString())}
          style={[styles.itemContainer, { backgroundColor }]}
        >
          <Text style={[styles.text, { color: textColor }]}>{item.name}</Text>
        </TouchableOpacity>
      </Block>
    );
  };

  return (
    <MainContainer edges={EDGES.LEFT_RIGHT}>
      <Block style={styles.container} backgroundColor={"whiteF5"}>
        <Row
          justifyContent={"space-between"}
          pt={"_80"}
          paddingHorizontal={"_28"}
        >
          <TouchableOpacity>
            <Image source={localImages().ic_menu} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={localImages().ic_cart} />
          </TouchableOpacity>
        </Row>
        <Block>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            extraData={selectedId}
          />
        </Block>
      </Block>
    </MainContainer>
  );
}

export default memo(Home);

const useStyle = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  labelStyle: {
    fontSize: 16,
    color: "black",
    marginBottom: 2,
    paddingTop: 6,
  },
  item: {
    padding: 10,
    borderRadius: 25,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 18,
  },
  itemContainer: {
    alignItems: "center",
    padding: 10,
    marginHorizontal: 10,

    borderRadius: 50,
  },
  text: {
    fontSize: 16,
  },
}));
