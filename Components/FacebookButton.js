import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";

export function FacebookButton() {
  return (
    <TouchableOpacity style={fbBtnstyles.button}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/124/124010.png",
        }}
        style={fbBtnstyles.icon}
      />
      <Text style={fbBtnstyles.text}>Sign In With Facebook </Text>
    </TouchableOpacity>
  );
}

const fbBtnstyles = StyleSheet.create({
  button: {
    width: 320,
    height: 45,
    backgroundColor: "#1877F2",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1877F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: "white",
    borderRadius: 30,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FacebookButton;
