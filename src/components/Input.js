import * as React from "react"
import { TextInput } from "react-native";

const InputField = props => {
  return (
    <TextInput
      onChangeText={(text) => props.onChange(text)}
      style={{ borderWidth: 2, borderColor: 'grey', paddingLeft: 8, marginVertical: 10, borderRadius: 4 }}
      placeholder={props.placeholder}
    />
  )
}

export default InputField;