import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./MintSection.module.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import * as anchor from "@project-serum/anchor";
import MintMain from "../mint/MintMain";
export interface MintMainProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  txTimeout: number;
  rpcHost: string;
}
function MintSection({
  candyMachineId,
  connection,
  txTimeout,
  rpcHost,
}: MintMainProps) {
  return (
    <div className={`${classes.icoArea} section-padding py-24 wow fadeInUp`}>
      <div className={`${classes.bar} z-0`}>
        <span className={`${classes.barContent} z-0`}> WEEDEFI </span>
      </div>
      <MintMain
        candyMachineId={candyMachineId}
        connection={connection}
        txTimeout={txTimeout}
        rpcHost={rpcHost}
      />
    </div>
  );
}

export default MintSection;
