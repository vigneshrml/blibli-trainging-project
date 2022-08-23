export default {
    name: "FilterBox",
    data() {
      return {
        selectedFilter: [],
      };
    },
    props: ["filterItems"],
    methods: {
      applyFilter() {
        this.$emit("filterOn");
      },
      clearFilter() {
        this.selectedFilter = [];
        this.$emit("filterClear");
        const allCheckbox = document.getElementsByClassName(
          "filter-checkbox-option"
        );
        for (var i = 0; i < allCheckbox.length; i++) {
          if (allCheckbox[i].type == "checkbox") allCheckbox[i].checked = false;
        }
      },
      handleCheck(event) {
        var updatedList = [...this.selectedFilter];
        if (event.target.checked) {
          updatedList = [...this.selectedFilter, event.target._value];
        } else {
          updatedList.splice(this.selectedFilter.indexOf(event.target._value), 1);
        }
        this.selectedFilter = updatedList;
        console.log(updatedList);
      },
    },
    watch: {
      selectedFilter() {
        this.$emit("filterChange", {
          options: this.selectedFilter,
        });
      },
    },
  };