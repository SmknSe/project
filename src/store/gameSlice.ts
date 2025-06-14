import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  visitedMarkers: string[];
  hasSeenWelcome: boolean;
}

const initialState: GameState = {
  visitedMarkers: [],
  hasSeenWelcome: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    visitMarker: (state, action: PayloadAction<string>) => {
      if (!state.visitedMarkers.includes(action.payload)) {
        state.visitedMarkers.push(action.payload);
      }
    },
    setWelcomeSeen: (state) => {
      state.hasSeenWelcome = true;
    },
    resetGame: (state) => {
      state.visitedMarkers = ['island1'];
      state.hasSeenWelcome = false;
    },
  },
});

export const { visitMarker, setWelcomeSeen, resetGame } = gameSlice.actions;
export default gameSlice.reducer;