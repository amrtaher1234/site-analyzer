import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ProgressiveLoading = ({
  messages,
  currentState,
  done,
  doneMessage,
}: {
  isFullyLoaded: boolean;
  messages: { [key: string]: string };
  currentState: string;
  done: boolean;
  doneMessage: string;
}) => {
  const [message, setMessage] = useState(messages[currentState]);

  useEffect(() => {
    setMessage(messages[currentState]);
  }, [currentState]);

  return (
    <section>
      <motion.span
        className="flex gap-2 items-center"
        key={currentState}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}>
        {done ? (
          doneMessage
        ) : (
          <>
            {message}
            <span className="loading loading-dots loading-md"></span>
          </>
        )}
      </motion.span>
    </section>
  );
};

export default ProgressiveLoading;
