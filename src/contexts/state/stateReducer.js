export function stateReducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        participants: state.participants.map((participant) => {
          if (participant.id === action.payload.participantId) {
            return {
              ...participant,
              muted: !participant.muted,
            };
          }
          return { ...participant };
        }),
      };

    default:
      return {
        ...state,
      };
  }
}
