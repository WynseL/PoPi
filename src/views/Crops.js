import React from "react";
import CropsRepo from "../data/repositories/CropsRepository";
import CropRow from "./subviews/CropRow";
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

const Crops = (props) => {
  const { height, width } = props;
  const useStyles = makeStyles({
    root: {
      width: "100%"
    },
    container: {
      maxHeight: height
    },
    table: {
      minWidth: width,
      "& .MuiTableCell-root": {
        borderLeft: "1px solid rgba(224, 224, 224, 1)"
      }
    }
  });

  const classes = useStyles();

  let repo = new CropsRepo();
  let data = repo.getData();
  let version = repo.getGameVersion();
  let date = repo.getDateUpdated();
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader className={classes.table}>
          <caption>
            Updated on {date}, Version {version}
          </caption>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan="3">
                Crop
              </TableCell>
              <TableCell align="center" colSpan="6">
                Seed
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" colSpan="5"></TableCell>
              <TableCell align="center" colSpan="2">
                Growth Time
              </TableCell>
              <TableCell align="center" colSpan="2">
                Yield
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" rowSpan="3">
                Name
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Price
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Energy
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Price
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Harvest
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Initial
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Cycle
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Harvest
              </TableCell>
              <TableCell align="center" rowSpan="3">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((crop) => (
              <CropRow key={crop.id} crop={crop} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Crops;
