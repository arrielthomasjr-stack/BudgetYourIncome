// =============================================================================
// FILE: src/screens/HomeScreen.tsx
// =============================================================================
// WHAT IS THIS FILE?
// The Home screen - the first screen users see when the app opens.
//
// HOW TO OPEN THE DRAWER FROM THIS SCREEN?
// The navigation prop has special drawer methods:
// - navigation.openDrawer()   → Opens the drawer
// - navigation.closeDrawer()  → Closes the drawer
// - navigation.toggleDrawer() → Toggles open/closed
//
// Users can also:
// - Swipe from the left edge of the screen
// - Tap the hamburger menu icon (☰) in the header (added automatically)
// =============================================================================

// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { DrawerScreenProps } from '@react-navigation/drawer';
// import { DrawerParamList } from '../../App';
// import { Ionicons } from '@expo/vector-icons';

// // =============================================================================
// // TYPE DEFINITION
// // =============================================================================
// // DrawerScreenProps gives us the correct types for drawer navigation.
// // This includes the drawer-specific methods like openDrawer().
// // =============================================================================

// type Props = DrawerScreenProps<DrawerParamList, 'Home'>;

// export default function HomeScreen({ navigation }: Props) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome Home!</Text>
//       <Text style={styles.subtitle}>Drawer Navigation Example</Text>

//       {/* =======================================================================
//           INFO BOX - How to open the drawer
//       */}
//       <View style={styles.infoBox}>
//         <Text style={styles.infoTitle}>How to Open the Drawer:</Text>
//         <Text style={styles.infoText}>1. Tap the ☰ icon in the header</Text>
//         <Text style={styles.infoText}>2. Swipe from the LEFT edge →</Text>
//         <Text style={styles.infoText}>3. Tap the button below</Text>
//       </View>

//       {/* =======================================================================
//           OPEN DRAWER BUTTON
//           =========================================================================
//           Demonstrates opening the drawer programmatically.
//           Use navigation.openDrawer() to open, navigation.toggleDrawer() to toggle.
//       */}
//       <Pressable
//         style={styles.button}
//         onPress={() => navigation.openDrawer()}
//       >
//         <Ionicons name="menu" size={24} color="#FFFFFF" style={styles.buttonIcon} />
//         <Text style={styles.buttonText}>Open Drawer</Text>
//       </Pressable>

//       {/* =======================================================================
//           NAVIGATE DIRECTLY TO OTHER SCREENS
//           =========================================================================
//           You can also navigate directly to other screens without opening
//           the drawer first. The drawer will close automatically.

//           HOW NAVIGATION WORKS:
//           --------------------
//           When you call navigation.navigate('Profile'), React Navigation:

//           1. Looks up 'Profile' in the registered screens (from App.tsx)
//           2. Finds: <Drawer.Screen name="Profile" component={ProfileScreen} />
//           3. Renders the ProfileScreen component

//           The string 'Profile' MUST match a 'name' prop from a Drawer.Screen
//           in App.tsx. If you try navigation.navigate('Foo') and there's no
//           <Drawer.Screen name="Foo" />, you'll get an error!

//           CONNECTION TO App.tsx:
//           ┌──────────────────────────────────────────────────────────────────┐
//           │  HomeScreen.tsx (this file)     │  App.tsx                       │
//           │  ─────────────────────────      │  ───────                       │
//           │                                 │                                │
//           │  navigation.navigate('Profile') │  <Drawer.Screen                │
//           │           │                     │    name="Profile"  ←───────────│
//           │           │                     │    component={ProfileScreen}   │
//           │           └─────────────────────│──→ Renders ProfileScreen       │
//           │                                 │                                │
//           └──────────────────────────────────────────────────────────────────┘

//           TYPESCRIPT CONNECTION:
//           ---------------------
//           The DrawerParamList type in App.tsx defines valid screen names:

//             type DrawerParamList = {
//               Home: undefined;
//               Profile: undefined;    // ← This is why 'Profile' is valid
//               Settings: undefined;
//               ...
//             };

//           TypeScript will warn you if you try to navigate to a screen
//           that doesn't exist in the DrawerParamList!
//       */}
//       <Text style={styles.sectionTitle}>Quick Navigation</Text>

//       <Pressable
//         style={[styles.navButton]}
//         onPress={() => navigation.navigate('Profile')}
//       >
//         <Ionicons name="person-outline" size={20} color="#4F46E5" />
//         <Text style={styles.navButtonText}>Go to Profile</Text>
//       </Pressable>

//       <Pressable
//         style={[styles.navButton]}
//         onPress={() => navigation.navigate('Settings')}
//       >
//         <Ionicons name="settings-outline" size={20} color="#4F46E5" />
//         <Text style={styles.navButtonText}>Go to Settings</Text>
//       </Pressable>

//       <Pressable
//         style={[styles.navButton]}
//         onPress={() => navigation.navigate('Notifications')}
//       >
//         <Ionicons name="notifications-outline" size={20} color="#4F46E5" />
//         <Text style={styles.navButtonText}>Go to Notifications</Text>
//       </Pressable>
//     </View>
//   );
// }

// // =============================================================================
// // STYLES
// // =============================================================================
// // StyleSheet.create() optimizes styles for React Native.
// //
// // FLEXBOX IN REACT NATIVE:
// // React Native uses Flexbox for layout, but with some differences from CSS:
// //   - flexDirection defaults to 'column' (not 'row' like CSS)
// //   - All dimensions are unitless (no 'px', 'em', etc.)
// //
// // COMMON LAYOUT PATTERNS USED HERE:
// //
// // 1. flexDirection: 'row' - Items in a horizontal row
// //    ┌──────────────────────────┐
// //    │ [Icon] [Text]            │
// //    └──────────────────────────┘
// //
// // 2. alignItems: 'center' - Center items on cross-axis
// //    (vertical centering when flexDirection: 'row')
// //
// // 3. justifyContent: 'center' - Center items on main-axis
// //    (horizontal centering when flexDirection: 'row')
// //
// // =============================================================================
// const styles = StyleSheet.create({
//   // ---------------------------------------------------------------------------
//   // CONTAINER
//   // ---------------------------------------------------------------------------
//   // flex: 1 = fill all available space
//   // This makes the container take up the whole screen
//   // ---------------------------------------------------------------------------
//   container: {
//     flex: 1,
//     backgroundColor: '#F3F4F6',
//     padding: 20,
//   },

//   // ---------------------------------------------------------------------------
//   // TEXT STYLES
//   // ---------------------------------------------------------------------------
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#1F2937', // Dark gray (Tailwind gray-800)
//     marginBottom: 8,
//     marginTop: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#6B7280', // Medium gray (Tailwind gray-500)
//     marginBottom: 24,
//   },

//   // ---------------------------------------------------------------------------
//   // INFO BOX - Colored tip/information container
//   // ---------------------------------------------------------------------------
//   infoBox: {
//     backgroundColor: '#E0E7FF', // Light indigo
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 24,
//   },
//   infoTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#4338CA', // Indigo
//     marginBottom: 8,
//   },
//   infoText: {
//     fontSize: 14,
//     color: '#4338CA',
//     marginBottom: 4,
//   },

//   // ---------------------------------------------------------------------------
//   // BUTTON - Primary action button with icon
//   // ---------------------------------------------------------------------------
//   // flexDirection: 'row' puts the icon and text side by side
//   // justifyContent: 'center' centers them horizontally
//   // alignItems: 'center' centers them vertically
//   // ---------------------------------------------------------------------------
//   button: {
//     backgroundColor: '#6366F1', // Indigo
//     flexDirection: 'row',       // Icon and text in a row
//     alignItems: 'center',       // Vertically center
//     justifyContent: 'center',   // Horizontally center
//     paddingVertical: 16,
//     borderRadius: 12,
//     marginBottom: 32,
//   },
//   buttonIcon: {
//     marginRight: 8, // Space between icon and text
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     fontWeight: '600',
//   },

//   // ---------------------------------------------------------------------------
//   // SECTION TITLE - Uppercase label for groups of items
//   // ---------------------------------------------------------------------------
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#6B7280',
//     textTransform: 'uppercase', // MAKES TEXT ALL CAPS
//     marginBottom: 12,
//   },

//   // ---------------------------------------------------------------------------
//   // NAV BUTTON - Navigation link styled as a card
//   // ---------------------------------------------------------------------------
//   // A common pattern: white card with border and icon + text
//   // ---------------------------------------------------------------------------
//   navButton: {
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     borderWidth: 1,
//     borderColor: '#E5E7EB', // Light gray border
//   },
//   navButtonText: {
//     fontSize: 16,
//     color: '#1F2937',
//     marginLeft: 12, // Space after icon
//   },
// });/*/
