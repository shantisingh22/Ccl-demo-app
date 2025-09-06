import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";

const GoogleButton = ({ title = "Sign in with Google", onPress }) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.content}>
        <Image source={require("../logogoogale.png")} style={styles.logo} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default GoogleButton;

const styles = StyleSheet.create({
  btn: {
    width: 320,
    height: 45,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#1877F2",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:25,
    marginTop:10,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 23,         
    height: 23,
    marginRight: 10,
    resizeMode: "contain", 
  },
  
  text: {
    fontFamily: "sans-serif", 
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
});
