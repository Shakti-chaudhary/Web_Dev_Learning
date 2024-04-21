import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

export function Data() {
  const dogUrl = useLoaderData(); // data fetch on loading
  const navigation = useNavigation(); // use to hold on loading state in component

  if (navigation.state === "loading") {
    return <h1>Loding...</h1>;
  }

  return (
    <>
      {" "}
      <div>Data present here!</div>
      <img src={dogUrl} alt="Dog Image" />
    </>
  );
}

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json");
  const dog = await res.json();
  return dog.url;
};
