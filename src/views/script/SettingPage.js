import  { deleteUser, updateUser } from "@/service/user.service"

export default {
    name : "SettingPage",
    data(){
        return{
            editUserId : "",
            deleteUserId : "",
            user : {
                name : "",
                password : ""
            }
        }
    },
    methods : {
        deleteUser(){
            deleteUser({
                userId : this.deleteUserId,
                successCallBack : (successResponse) => {
                    console.log(successResponse)
                    alert("User deleted successfully")
                },
                failureCallBack : (errrorResponse) => {
                    alert(errrorResponse)
                }
            })
        },
        updateUser(){
            updateUser({
                userId : this.editUserId,
                userData : this.user,
                successCallBack : (successResponse) => {
                    console.log(successResponse)
                    alert("User Updated successfully")
                },
                failureCallBack : (errrorResponse) => {
                    alert(errrorResponse)
                }
            })
        }
    }
}