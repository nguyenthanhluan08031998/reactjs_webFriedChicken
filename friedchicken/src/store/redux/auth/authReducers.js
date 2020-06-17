
const updateState = (oldState, updatedState) => {
   return {
      ...oldState, // overide the old statef
      ...updatedState, // update the new state
   };
};

const initialState = {
   theme: "light",
   user: {
      isAuthenticated: false,
      Id: 0,
      Name: "",
      Birthday: "",
      IdRole: "",
      Image: "",
      Email: "",
      NumberPhone: ""
   },
};
export function isNullOrEmpty(data) {
   if (data === null) {
      return true;
   }
   if (data === "") {
      return true;
   }
   if (data === undefined) {
      return true;
   }
   if (typeof data === "undefined") {
      return true;
   }
   return false;
}
const buildUserInfo = (state, action) => {
   let user = { ...state.user };
   if (!isNullOrEmpty(action.user)) {
      user.isAuthenticated = true;
      user.Id = action.user.Id;
      user.Name = action.user.Name;
      user.IdRole = action.user.IdRole;
      user.Image = action.user.Image;
      user.NumberPhone = action.user.NumberPhone;
      user.Email = action.user.Email;
   }

   return updateState(state, { user: user });
};



const reducer = (state = initialState, action) => {
   return buildUserInfo(state, action);
};

export default reducer;
