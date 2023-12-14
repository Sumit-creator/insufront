import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  formPageNumber: -1,
  type: "",
  typeOfFuneral: {
    ceremonyTypeIndex: -1,
    ceremonyType: "",
    funeralIndex: -1,
    funeral: "",
    extraMessage: "",
    coffinTypeNumber: -1,
    coffinType: "",
    coffinLocationNumber: -1,
    coffinLocation: "",
    dressingStyleNumber: -1,
    dressingStyle: "",
    serviceInYourName: "",
    serviceInYourNameIndex: -1,
  },
  beforeService: {
    funeralLocationIndex: -1,
    funeralLocation: "",
    carryInFuneralIndex: -1,
    carryInFuneral: "",
    dressCodeForCeremonyIndex: -1,
    dressCodeForCeremony: "",
    arrivalAtFuneralIndex: -1,
    arrivalAtFuneral: "",
    thoughtsOnAshScattering: "",
  },
  theService: {
    songsHymnsIndex: -1,
    songsHymns: "",
    extraWordsIndex: -1,
    extraWords: "",
    donationsIndex: -1,
    donations: "",
  },
  afterService: {
    wakeGatheringIndex: -1,
    wakeGathering: "",
    typeOfMemorialIndex: -1,
    typeOfMemorial: "",
    changeIndex: -1,
    change: "",
  },
  emailResults: {
    firstName: "",
    surName: "",
    emailAddress: "",
  },
  error: null,
  loading: false,
  send: null,
};

export const createNewForm = createAsyncThunk(
  "form/newForm",
  async (data, thunkApi) => {
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:5000/api/form/newRequest",
        data
      );
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const formSlice = createSlice({
  name: "form",
  initialState: INITIAL_STATE,
  reducers: {
    CHECK_STATE: (state, action) => {
      state.type = action.payload;
    },
    SET_PAGE_NUMBER: (state, action) => {
      state.formPageNumber = action.payload;
    },
    SET_TYPE: (state, action) => {
      state.type = action.payload;
    },
    SET_TYPE_OF_FUNERAL: (state, action) => {
      state.typeOfFuneral = action.payload;
    },
    SET_BEFORE_SERVICE: (state, action) => {
      state.beforeService = action.payload;
    },
    SET_THE_SERVICE: (state, action) => {
      state.theService = action.payload;
    },
    SET_AFTER_SERVICE: (state, action) => {
      state.afterService = action.payload;
    },
    SET_EMAIL_RESULTS: (state, action) => {
      state.emailResults = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createNewForm.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.send = false;
    });
    builder.addCase(createNewForm.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.send = true;
    });
    builder.addCase(createNewForm.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "There was an error";
      state.send = false;
    });
  },
});

const formActions = formSlice.actions;

export default formSlice.reducer;
export { formActions };
