// import React from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import ContinueButton from "./ContinueButton";

// const WorkShop = () => {
//   return (
//     <View style={styles.container}>
//       {/* Image section */}
//       <Image
//         source={require('../assets/workshop.png')}
//         style={styles.image}
//       />

//       {/* Title */}
//       <Text style={styles.title}>Creative Learning Workshops</Text>

//       {/* Description */}
//       <Text style={styles.text}>
//   We make toys, conduct workshops with children and teachers,
//   and produce videos and publications.
// </Text>

// m 
//       {/* Dots */}
//       <View style={styles.dots}>
//         <View style={[styles.dot, { backgroundColor: "#ccc" }]} />
//         <View style={[styles.dot, { backgroundColor: "#ccc" }]} />
//         <View style={[styles.dot, { backgroundColor: "teal" }]} />
//       </View>

//       {/* Buttons */}
//             <ContinueButton  />
      

//       <TouchableOpacity>
//         <Text style={styles.skip}>SKIP</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   image: {
//     width: 120,
//     height: 120,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#004d40",
//     marginBottom: 10,
//     textAlign: "center",
//   },
//  text: {
//   width: 331,
//   height: 65,
//   marginTop: 20,   
//   marginLeft: 30,  
//   fontFamily: "PlusJakartaSans-Regular", 
//   fontWeight: "400",
//   fontSize: 16,
//   lineHeight: 16,
//   letterSpacing: 0.32,
//   textAlign: "center",
//   textTransform: "capitalize",
//   color: "#555",
// },

//   dots: {
//     flexDirection: "row",
//     gap: 6,
//     marginBottom: 20,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },
//   button: {
//     backgroundColor: "teal",
//     paddingVertical: 10,
//     paddingHorizontal: 40,
//     borderRadius: 6,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   skip: {
//     fontSize: 12,
//     color: "#444",
//     textDecorationLine: "underline",
//   },
// });

// export default WorkShop;





import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ContinueButton from "./ContinueButton";

export default function WorkShop({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/workshop.png")} style={styles.logo} />

      <Text style={styles.title}>
        <Text style={styles.bold}>Creative Learning Workshops</Text>
      </Text>

      <Text style={styles.subtitle}>
        We make toys, conduct workshops with children {"\n"} and teachers,
        and produce {"\n"} videos and publications.
      </Text>

      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>

      <ContinueButton onPress={() => navigation.navigate("CertificationCourse")} />

      <TouchableOpacity onPress={() => navigation.navigate("Sessions")}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 90,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    color: "#004d40",
    width: 347,
    height: 80,
  },
  bold: {
    fontWeight: "800",
    fontSize: 32,
    color: "#004d40",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#00796B",
  },
  skipText: {
    color: "gray",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
