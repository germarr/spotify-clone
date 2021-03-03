export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item: null,
    //REMOVE after
    //token: "BQCC5HKg0m6sXxTmbaHYTgZ1Zbo4qp6etB_V6iaqorOC7fh-m8IBPmC-U6jzvymWmoARwMBGpdT_6HlVBkE1ujHraCSKl4kkILYaVPbzfxVR8jkDHcfYr5aoVLwmD8vi7Btba9eJsXYkxHVKREjFgaFwXv6iCI4kive4AorHWS0DllbLCLOC"
}
const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            };

        case "SET_TOKEN":
            return{
                ...state,
                token:action.token
            };

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }

        default:
            return state;
    }
}

export default reducer;