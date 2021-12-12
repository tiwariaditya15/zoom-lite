import { Particpants } from "../components/Participants";
import { Tile } from "../components/Tile";
import { useStateContext } from "../contexts/state/StateContext";
import styles from "./Call.module.css";

export function Call() {
  const {
    state: { participants },
  } = useStateContext();
  return (
    <>
      <section className={styles.nav}>
        <p>Zoom Lite</p>
      </section>
      <section className={styles.gridTwo}>
        <section className={styles.flex}>
          {participants.map((participant) => (
            <Tile participant={participant} key={participant.id} />
          ))}
        </section>
        <section className={styles.participants}>
          <Particpants />
        </section>
      </section>
    </>
  );
}
