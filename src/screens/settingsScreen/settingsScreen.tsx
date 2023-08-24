import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import {
  MainNavigatorStackScreenProps,
  TabNavigatorStackScreenProps,
} from "../../navigation/navigation";

export type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<MainNavigatorStackScreenProps, "TabNavigator">,
  BottomTabNavigationProp<TabNavigatorStackScreenProps, "Settings">
>;

export const SettingsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SettingsScreen</Text>
      <Button
        title="User Profile"
        onPress={() => navigation.navigate("UserProfile")}
      />
    </View>
  );
};
