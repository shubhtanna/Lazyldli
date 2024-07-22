import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Score {
  username: string;
  time: string;

}

interface ScoresState {
  scores: Score[];
  recentEntry: Score | null;
}

const initialState: ScoresState = {
  scores: [],
  recentEntry: null,
};

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<Score>) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => (a.time > b.time ? 1 : -1));
      state.recentEntry = action.payload; // Update recent entry
    }
  }
});

export const { addScore } = scoresSlice.actions;
export default scoresSlice.reducer;











// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface Score {
//   username: string;
//   time: string;

// }

// interface ScoresState {
//   scores: Score[];
 
// }

// const initialState: ScoresState = {
//   scores: [],
 
// };

// const scoresSlice = createSlice({
//   name: 'scores',
//   initialState,
//   reducers: {
//     addScore: (state, action: PayloadAction<Score>) => {
//       state.scores.push(action.payload);
//       state.scores.sort((a, b) => (a.time > b.time ? 1 : -1));
//     }
//   }
// });

// export const { addScore } = scoresSlice.actions;
// export default scoresSlice.reducer;
