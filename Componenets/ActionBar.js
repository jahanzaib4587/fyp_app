import * as React from "react";
import { Appbar } from "react-native-paper";

const AppBarComponent = ({ title }) => {
  return (
    <Appbar.Header>
      <Appbar.Content style={{ alignItems: "center" }} title={title} />
    </Appbar.Header>
  );
};

export default AppBarComponent;

// const styles = StyleSheet.create({
//   bottom: {
//     // position: "absolute",
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//   },
// });
