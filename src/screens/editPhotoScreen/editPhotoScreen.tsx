// screens/editPhotoScreen/editPhotoScreen.tsx
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";

import {
  MainNavigatorStackScreenProps,
  TabNavigatorStackScreenProps,
} from "../../navigation/navigation";

// otypowanie naszego ekranu
type EditPhotoScreenProps = CompositeScreenProps<
  StackScreenProps<MainNavigatorStackScreenProps, "EditPhoto">,
  BottomTabScreenProps<TabNavigatorStackScreenProps, "Photos">
>;

export const EditPhotoScreen: React.FC<EditPhotoScreenProps> = ({
  navigation,
  route,
}) => {
  //wyciągnięcie i odczytanie parametrów z route
  const {
    params: { photoId },
  } = route;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>EditPhotoScreen</Text>
      {/*wyświetlenie parametrów*/}
      <Text>{photoId}</Text>

      {/*przejście na inny ekran za pomocą navigation*/}
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
