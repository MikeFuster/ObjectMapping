import React, { useMemo } from "react";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { rankWith, ControlProps, and, uiTypeIs } from "@jsonforms/core";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
} from "@material-ui/core";
import dot from "dot-object";

const SourceTableVanillaRenderer = ({ data }: ControlProps) => {
  const baseTable = useMemo(() => {
    return dot.dot(data);
  }, [data]);

  return (
    <div style={{ width: "1100px", margin: "0 auto" }}>
      <h2 style={{ width: "max-content" }}>Source Data</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Object.keys(baseTable).map((val) => (
                <TableCell style={{ fontWeight: 600 }} key={val}>
                  {val}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {Object.keys(baseTable).map((val) => (
                <TableCell key={val}>{dot.pick(val, data)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const SourceTableTester = rankWith(3, and(uiTypeIs("SourceTable")));
const SourceTableRenderer = withJsonFormsControlProps(
  SourceTableVanillaRenderer
);

const SourceTableControl = {
  tester: SourceTableTester,
  renderer: SourceTableRenderer,
};

export { SourceTableControl, SourceTableTester, SourceTableRenderer };

export default SourceTableControl;