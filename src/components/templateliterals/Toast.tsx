type HorizonPos = "left" | "center" | "right";
type VerticalPos = "top" | "center" | "bottom";

type ToastProps = {
  position: Exclude<`${HorizonPos}-${VerticalPos}`, "center-center"> | "center";
};

export default function Toast({position}: ToastProps) {
  return <div>Toast Notificaiton Position - {position}</div>;
}
