import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Header from "components/hero/BackgroundAsImageWithCenteredContent";
import ContactForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter.js";

function App() {
  
  return (
    <>
      <GlobalStyles />
      <AnimationRevealPage disabled>
        <Header />
        <ContactForm />
        <MiniCenteredFooter />
      </AnimationRevealPage>
    </>
  );
}

export default App;
