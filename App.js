import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { buttons } from "./buttons";
import { useEffect, useState } from "react";

const PASSWORD_LENGTH = 4;
const PIN_CODE = "0908";

export default function App() {
  const [display, setDisplay] = useState("");

  const click = (button) => {
    switch (button) {
      case "<":
        setDisplay((prev) => prev.slice(0, prev.length - 1));
        break;
      case "C":
        setDisplay("");
        break;
      default:
        setDisplay((prev) => `${prev}${button}`);
        break;
    }
  };

  const checkPassword = (password) => {
    if (password.length === PASSWORD_LENGTH) {
      if (PIN_CODE === password) {
        Alert.alert("Notification", "You have successfully logged in.");
        setDisplay("");
      } else {
        Alert.alert("Notification", "Error.Please try again.");
        setDisplay("");
      }
    }
  };

  const showLoader = () => {
    return <ActivityIndicator size="large" color="yellow" />;
  };

  useEffect(() => {
    setTimeout(checkPassword, 1000, display);
  }, [showLoader]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.boxPassword}>
          {display.length === PASSWORD_LENGTH ? (
            showLoader()
          ) : (
            <FlatList
              data={[...Array(PASSWORD_LENGTH)]}
              renderItem={({ _, index }) => (
                <View
                  key={index}
                  style={display[index] ? styles.active : styles.unActive}
                />
              )}
              contentContainerStyle={styles.passwordButtons}
            />
          )}
        </View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => (
            <View style={styles.boxKeyBoard}>
              <TouchableOpacity
                style={styles.keyBoardButton}
                onPress={() => click(item.name)}
                activeOpacity={0.7}
              >
                <Text style={styles.titleButton}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.name}
          numColumns={3}
          horizontal={false}
          contentContainerStyle={styles.keyBoardContainer}
        />
      </View>
    </View>
  );
}
