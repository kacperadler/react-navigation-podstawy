// screens/photosScreen/photosScreen.tsx
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useMemo, useState } from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

import {
  MainNavigatorStackScreenProps,
  TabNavigatorStackScreenProps,
} from "../../navigation/navigation";

type NavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<MainNavigatorStackScreenProps, "TabNavigator">,
  BottomTabNavigationProp<TabNavigatorStackScreenProps, "Settings">
>;

type PhotoType = { id: number; uri: string };

const PhotoItem = ({ uri }: { uri: string }) => {
  const navigation = useNavigation<NavigationProp>();
  const photoId = Math.random() + "_" + uri;

  return (
    <>
      {/*przejście do następnego ekranu za pomocą hooka z podaniem parametru*/}
      <TouchableOpacity
        onPress={() => navigation.navigate("EditPhoto", { photoId })}
      >
        <Image
          source={{ uri }}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "grey",
            borderRadius: 12,
          }}
        />
      </TouchableOpacity>
    </>
  );
};

const PhotoGallery = ({ photos }: { photos: PhotoType[] }) => {
  return (
    <View
      style={{
        gap: 12,
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {photos.map(({ id, uri }) => (
        <PhotoItem key={id} uri={uri} />
      ))}
    </View>
  );
};

export const PhotosScreen: React.FC = () => {
  const keyArray = useMemo(() => Array.from(Array(30).keys()), []);
  const [photos, setPhotos] = useState<PhotoType[]>([]);

  useEffect(() => {
    setPhotos(
      keyArray.map((id) => ({
        id,
        uri: "https://picsum.photos/seed/picsum/200/300",
      }))
    );
  }, [keyArray]);

  return (
    <ScrollView style={{ paddingTop: 15 }}>
      <PhotoGallery photos={photos} />
    </ScrollView>
  );
};
