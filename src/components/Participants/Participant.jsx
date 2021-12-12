import { useStateContext } from "../../contexts/state/StateContext";
import { MdiMicrophoneOff, MdiMicrophoneOutline } from "../../icons";
import styles from "./Participant.module.css";
export default function Participant({ participant }) {
  const { dispatch } = useStateContext();
  return (
    <section className={styles.root}>
      <section>{participant.name}</section>
      <button
        onClick={() =>
          dispatch({
            type: "TOGGLE",
            payload: { participantId: participant.id },
          })
        }
      >
        {participant.muted ? <MdiMicrophoneOff /> : <MdiMicrophoneOutline />}
      </button>
    </section>
  );
}
