import { useStateContext } from "../../contexts/state/StateContext";
import Participant from "./Participant";

export function Particpants() {
  const {
    state: { participants },
  } = useStateContext();
  return (
    <section>
      {participants.map((participant) => (
        <Participant participant={participant} />
      ))}
    </section>
  );
}
