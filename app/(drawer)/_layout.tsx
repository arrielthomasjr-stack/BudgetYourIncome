import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerType: "front",
      }}
    >
      {/* Primary App (Tabs) */}
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Budget",
          drawerIcon: (props) => {
            console.log("Drawer icon props:", props);

            return (
              <Ionicons
                name="settings-outline"
                size={props?.size ?? 24}
                color={props?.color ?? "#000"}
              />
            );
          },
        }}
      />
      {/* Secondary Screens */}
      <Drawer.Screen
        name="profile"
        options={{
          title: "Profile",
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          title: "Settings",
          drawerIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
