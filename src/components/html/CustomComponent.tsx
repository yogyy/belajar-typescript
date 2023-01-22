import Greet from "../Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>hello {props.name}</div>;
};
