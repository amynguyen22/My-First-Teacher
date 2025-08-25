import React from 'react'
import LevelNode from './LevelNode.jsx'
import Connector from './Connector.jsx'

export default function SubjectMap({ progress, openLevel, total = 4 }) {
  const nodes = [];
  for (let i = 1; i <= total; i++) {
    const prevDone = i === 1 ? true : !!progress[i - 1];
    const status = progress[i] ? "done" : prevDone ? "open" : "locked";
    nodes.push(
      <React.Fragment key={i}>
        <LevelNode idx={i} status={status} onOpen={() => (status !== "locked" ? openLevel(i) : null)} />
        {i < total && <Connector />}
      </React.Fragment>
    );
  }
  return <div className="flex flex-col items-center">{nodes}</div>;
}
