import { shallowMount } from '@vue/test-utils';

import SettingPage from "@/views/script/SettingPage";

describe("SettingPage",()=>{
    let component;
    beforeEach(()=>{
        component = shallowMount(SettingPage , {});
    })

    it("Delete User",()=>{
        component.vm.editUserId = 63
        component.vm.user = { name : "Alen" , password : "12345" }
        component.vm.updateUser();
    })

    it("Update User",()=>{
        component.vm.deleteUserId = 63
        component.vm.deleteUser();
    })
})