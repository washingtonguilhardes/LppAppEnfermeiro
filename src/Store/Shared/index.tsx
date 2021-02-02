import React, { PropsWithChildren } from 'react';

export default function Shared(props: PropsWithChildren<{}>) {
  return <>{props.children}</>;
}
