import { useState } from "react";
import Invitation from "./components/Invitation";
import EnvelopeIntro from "./components/EnvelopeIntro";
import DateConfirmed from "./components/DateConfirmed";
import PasswordScreen from "./components/PasswordScreen"
function App() {
  const [step, setStep] = useState("login");
  // login -> invite → envelope → confirmed

 return (
    <>
      {step === "login" && (
        <PasswordScreen 
          onSuccess={() => setStep("invite")} 
        />
      )}

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