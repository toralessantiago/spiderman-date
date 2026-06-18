import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Invitation from "./components/Invitation";
import DateConfirmed from "./components/DateConfirmed";

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!accepted ? (
        <Invitation
          key="invitation"
          onAccept={() => setAccepted(true)}
        />
      ) : (
        <DateConfirmed
          key="confirmed"
        />
      )}
    </AnimatePresence>
  );
}

export default App;