import styles from "../styles/login.module.scss";
import { Box, Container, Grid } from "@mui/material";
const Loader = () => {
  return (
    <Container>
      <Grid container className={styles.Grid}>
        <Grid className={styles.Gridarea}>
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loader;
