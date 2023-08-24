import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { EditPhotoScreen } from "../screens/editPhotoScreen";
import { PhotosScreen } from "../screens/photosScreen";
import { SettingsScreen } from "../screens/settingsScreen";
import { UserProfileScreen } from "../screens/userProfileScreen";

export type TabNavigatorStackScreenProps = {
  Settings: undefined;
  Photos: undefined;
};

export type MainNavigatorStackScreenProps = {
  TabNavigator: NavigatorScreenParams<TabNavigatorStackScreenProps>;
  EditPhoto: { photoId: string };
  UserProfile: undefined;
};

const Stack = createStackNavigator<MainNavigatorStackScreenProps>();
const Tab = createBottomTabNavigator<TabNavigatorStackScreenProps>();

export const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={MainScreens}
          options={{ headerShown: false }}
        />
        <Stack.Group>
          <Stack.Screen name="EditPhoto" component={EditPhotoScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const MainScreens: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
