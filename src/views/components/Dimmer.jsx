import React, { useEffect, useState } from 'react';
import { timeout } from '/common/functions';

export default function Dimmer(props) {

  const {dimm, toggle} = props;

  const [dimmClass, setDimmClass] = useState('dimm ');

  async function setDimm(dimm) {
    if (dimm) {
      setDimmClass('dimm show');
      await timeout(50);
      setDimmClass('dimm show active');
    } else {
      setDimmClass('dimm show ');
      await timeout(350);
      setDimmClass('dimm ');
    }
  }

  useEffect(() => {
    setDimm(dimm);
  }, [dimm]);

  return (
    <div className={dimmClass} onClick={toggle}></div>
  );
}