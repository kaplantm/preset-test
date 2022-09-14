import { memo } from "react";

export interface FooProps {}

const Foo = (props: FooProps) => {
  return (
    <div>Foo</div>
  );
};

export default memo(Foo);
