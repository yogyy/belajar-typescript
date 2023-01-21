import Login from "./Login";
import {ProfilProps} from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfilProps>;
};

export default function Private({isLoggedIn, component: Component}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name="yogy" />;
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
}
