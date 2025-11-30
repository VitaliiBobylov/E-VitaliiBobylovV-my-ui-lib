import { useState } from "react";
import Toast from "../Toast/toast.stories";
import { Button } from "../Button/button";

export default {
  title: "Components/Toast",
  component: Toast,
};

export const WithManualClose = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show Toast</Button>
      {show && (
        <Toast
          message="Closable manually"
          type="info"
          duration={5000}
          onClose={() => setShow(false)}
          closable
        />
      )}
    </>
  );
};
