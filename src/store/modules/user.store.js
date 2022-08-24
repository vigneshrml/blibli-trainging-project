import { createNewUser, getUserListFromAPI } from "@/service/user.service";

export default {
    state : {
        userList : [],
        userLoader : false,
    },
    getters : {
        getUserList(state){
            return state.userList
        }
    },
    mutations : {
        setUserList(state,updatedUserList){
            state.userList = updatedUserList;
            state.userLoader = false;
        },
        setLoaderTrue(state){
            state.userLoader = true
        }
    },
    actions : {
        CREATE_NEW_USER({commit , dispatch},userData){
            commit("setLoaderTrue")
            createNewUser({
                userData : userData ,
                successCallBack : (successResponse) => {
                    console.log(successResponse)
                    dispatch("RETRIVE_USER_DATA")
                },
                failureCallBack : ( failureResponse) => {
                    console.log(failureResponse)
                    // commit("setUserList",[]);
                }
            })
        },
        RETRIVE_USER_DATA({commit}){
            getUserListFromAPI({
                successCallBack : (successResponse) => {
                    commit("setUserList",successResponse.data)
                },
                failureCallBack : (failureResponse) => {
                    console.log(failureResponse)
                }
            })
        }
    }
}