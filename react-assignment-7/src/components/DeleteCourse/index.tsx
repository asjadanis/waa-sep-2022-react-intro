import { FC } from "react";
import { Box, Button, TextField } from "@mui/material";

const DeleteCourse: FC = () => {
  return (
    <section>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off">
        <TextField id="outlined-basic" label="Course ID" variant="outlined" />
      </Box>
      <Button
        color="error"
        size="large"
        sx={{ marginTop: "10px" }}
        variant="outlined">
        Submit
      </Button>
    </section>
  );
};

export default DeleteCourse;