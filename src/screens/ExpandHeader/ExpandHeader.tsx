import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import useExpandHeader from "~hooks/useExpandHeader";
import { Image } from "native-base";
import { BACK_HIT_AREA, DESCRIPTION, IMAGE_SOURCE, TITLE } from "./config";
import Animated from "react-native-reanimated";
import BackIcon from "~assets/icons/BackIcon";
import SearchIcon from "~assets/icons/SearchIcon";
import { useNavigation } from "@react-navigation/native";

const ExpandHeader: React.FC = () => {
  const header = useExpandHeader();
  const navigation = useNavigation();

  return (
    <View>
      <Animated.View style={[styles.header, header.style.container]}>
        <TouchableOpacity onPress={navigation.goBack} hitSlop={BACK_HIT_AREA}>
          <BackIcon />
        </TouchableOpacity>
        <Animated.View style={header.style.opacity}>
          <Text style={styles.headerTitle}>Expand header</Text>
        </Animated.View>
        <Animated.View style={header.style.opacity}>
          <SearchIcon />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        scrollEventThrottle={16}
        bounces={false}
        onScroll={header.handler}
      >
        <Image source={{ uri: IMAGE_SOURCE }} alt="cat" style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{TITLE}</Text>
          <Text style={styles.description}>{DESCRIPTION}</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default ExpandHeader;
