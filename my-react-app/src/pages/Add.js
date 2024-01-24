import React from "react";
import Stack from "react-bootstrap/Stack";
import InputCoin from "./components/InputCoin";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
const Add = () => {
  return (
    <>
      <NavigationBar />
      <Stack
        direction="horizontal"
        gap={5}
        fluid
        style={{ "margin-top": "5rem" }}
      >
        <InputCoin coinType="HP" color="#f85944" />
        <InputCoin coinType="CP" color="#44f8cb" />
        <InputCoin coinType="SP" color=" #a4f844" />
      </Stack>
      <Footer />
    </>
  );
};

export default Add;
