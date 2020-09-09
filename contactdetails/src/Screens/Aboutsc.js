import React from "react";
import Head from "../Screencomp/Header";
import Aboutus from "../Screencomp/Aboutus";
import Font from "../Screencomp/Foot";
function Profile() {
  return (
    <div>
      <Head title="profileNav" link="prof" brand="profile" btn="2"></Head>
      <Aboutus></Aboutus>
      <Font />
    </div>
  );
}

export default Profile;
