import { useState } from "react";
import Invitation from "./components/Invitation";
import EnvelopeIntro from "./components/EnvelopeIntro";
import DateConfirmed from "./components/DateConfirmed";

function App() {
  const [step, setStep] = useState("invite");
  // invite → envelope → confirmed

  return (
    <>
      {step === "invite" && (
        <Invitation
          onAccept={() => setStep("envelope")}
        />
      )}

      {step === "envelope" && (
        <EnvelopeIntro
          onOpen={() => setStep("confirmed")}
        />
      )}

      {step === "confirmed" && <DateConfirmed />}
    </>
  );
}

export default App;