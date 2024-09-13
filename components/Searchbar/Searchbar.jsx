
import { TextInput } from "react-native";
import { s } from "./Searchbar.style.js";

export function Searchbar({ onSubmit }) {
  return (
    <TextInput
    onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.input}
      placeholder="Chercher une ville... Ex: Abidjan"
    />
  );
}
