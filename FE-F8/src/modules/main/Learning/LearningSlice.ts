import { TrackStepDto } from '@/src/models/Learning/Learning';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILearningSlice {
  trackStepCount: number;
  trackStepActive?: TrackStepDto;
  cntTrackStepCompleted: number;
}

const initialState: ILearningSlice = {
  trackStepCount: 0,
  cntTrackStepCompleted: 0
};

export const LearningSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setTrackStepCount(state: ILearningSlice, action: PayloadAction<number>) {
      return { ...state, trackStepCount: action.payload };
    },
    setTrackStepActive(state: ILearningSlice, action: PayloadAction<TrackStepDto>) {
      return { ...state, trackStepActive: action.payload };
    },
    setCntTrackStepCompleted(state: ILearningSlice, action: PayloadAction<number>) {
      return { ...state, cntTrackStepCompleted: action.payload };
    }
  }
});

export const { setTrackStepCount, setTrackStepActive, setCntTrackStepCompleted } = LearningSlice.actions;

export default LearningSlice.reducer;
