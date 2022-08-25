<template>
    <div class="delete-controller">
       <div>
        <h4>Edit user information By Id</h4>
        <div class="form-control">
        <label for="name">User Id</label>
        <input
          type="text"
          name="name"
          v-model="editUserId"
          class="form-control-field"
          id="name"
          placeholder="Enter User Id"
        />
      </div>
      <div class="form-control">
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          v-model="user.name"
          class="form-control-field"
          id="name"
          placeholder="Enter name"
        />
      </div>
      <div class="form-control">
        <label for="name">Password</label>
        <input
          type="text"
          name="name"
          v-model="user.password"
          class="form-control-field"
          id="name"
          placeholder="Enter new password"
        />
        
       <button type="button" class="action-button" @click="updateUser()">
        Update User</button
      >
      </div>
       </div>
       <div>
        <h4 style="color : red;">Delete Account By Id</h4>
         <div class="form-control">
        <label for="name">User Id</label>
        <input
          type="text"
          name="name"
          v-model="deleteUserId"
          class="form-control-field"
          id="name"
          placeholder="Enter User Id"
        />
       <button type="button" class="action-button" @click="deleteUser()">
        Delete User</button
      >
      </div>
       </div>
    </div>
</template>
<script>
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
</script>
<style>
    .delete-controller {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}
</style>