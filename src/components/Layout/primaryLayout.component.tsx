import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import {db } from "config";
import { Home } from "sections";

async function getData() {
  const docRef = doc(db, "infos", "about");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
export const PrimaryLayout = () => {
  useEffect(() => {
    getData();
  }, []);
  return <div>PrimaryLayout</div>;
};
