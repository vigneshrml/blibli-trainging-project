import { shallowMount } from '@vue/test-utils'

import LoginPage from "@/views/script/LoginPage";

describe('LoginPage', () => {
    let component;
    beforeEach(()=>{
        component = shallowMount(LoginPage , {});
    })

    it("Validate User",()=>{
        component.vm.currentUsername = "admin";
        component.vm.currentPassword = "admin";
        component.vm.validateForm()
        // component.vm.validate = true;

        component.vm.currentUsername = "admin123734";
        component.vm.currentPassword = "admin";
        component.vm.validateForm()
        // component.vm.validate = false;
    })

    it("Compute Valid Username",()=>{
        // component.vm.currentUsername = "admin1";
        component.vm.currentUsername = "admin123734";
        component.vm.validateUsername;

        component.vm.currentUsername = "admin";
        component.vm.validateUsername;
    })

    it("Compute Valid Password",()=>{

        component.vm.currentPassword = "admin13734";
        component.vm.validatePassword;

        component.vm.currentPassword= "admin";
        component.vm.validatePassword;
    })

  })