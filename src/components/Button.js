import * as React from "react"
import { Text, Button } from "native-base"

const AuthButton = props => {
  return (
    <Button
      block
      onPress={props.onPress}
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#2E5BFF",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        elevation: 0,
        marginVertical: 10
      }}
    >
      <Text style={{fontSize: 18}}>{props.text}</Text>
    </Button>
  )
}
export default AuthButton;