export default {
    name : "ButtonComponent",
    props : {
        label : {
            type : String,
            default : "Submit",
        },
        type : {
            type : String,
            default : "button"
        }
    },
    methods : {
        onClick(){
            this.$emit('onClick')
        }
    }
}