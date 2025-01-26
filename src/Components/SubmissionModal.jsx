import { Box, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  maxHeight: "400px",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius: "24px",
  p: 3, // Adding padding for better spacing inside the modal
};

function SubmissionModal({ openValue, closefunction, addedfunction, message }) {
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    let timer;

    if (openValue) {
      setCountDown(5);

      timer = setInterval(() => {
        setCountDown((prev) => {
          if (prev <= 1) {
            clearInterval(timer); 
            addedfunction()
            closefunction(); 
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timer); // Cleanup timer on unmount or when modal closes
    };
  }, [openValue, closefunction]);

  return (
    <Modal
      open={openValue}
      onClose={closefunction}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {message || "Thank you!"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Closing in {countDown} seconds...
        </Typography>
      </Box>
    </Modal>
  );
}

export default SubmissionModal;
