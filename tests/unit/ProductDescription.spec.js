import { shallowMount } from '@vue/test-utils';

import ProductDescription from "@/views/script/ProductDescription";

describe("ProductDescription",()=>{
    let component;
    beforeEach(()=>{
        component = shallowMount(ProductDescription , {});
    })

    it("Get Single Product",()=>{
        component.vm.getSingleProduct();
    })
})