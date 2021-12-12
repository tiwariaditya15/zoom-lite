import { useStateContext } from "../../contexts/state/StateContext";
import { MdiMicrophoneOutline, MdiMicrophoneOff } from "../../icons";
import styles from "./Tile.module.css";

export function Tile({ participant }) {
  const { dispatch } = useStateContext();
  return (
    <section className={styles.card}>
      <section className={styles.name}>{participant.name}</section>
      <section
        className={styles.icon}
        onClick={() => {
          dispatch({
            type: "TOGGLE",
            payload: { participantId: participant.id },
          });
        }}
      >
        {participant.muted ? <MdiMicrophoneOff /> : <MdiMicrophoneOutline />}
      </section>
    </section>
  );
}
