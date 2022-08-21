<template>
  <div class="outer-card" id="sticky-card">
    <p class="filter-title">Fast Delivery</p>
    <div class="filter-single-portion">
      <input type="checkbox" name="singleData" />
      <span class="filter-name">
        <img
          src="https://www.static-src.com/frontend/catalog/static/img/blibli-shipping.a82f159.svg"
          width="100"
          alt=""
        />
      </span>
    </div>
    <hr class="filter-hr" v-if="index != filterItems.length - 1" />
    <div
      class="filter-entity"
      v-for="(data, index) in filterItems"
      :key="index"
    >
      <p class="filter-title">{{ data.title }}</p>
      <div
        class="filter-single-portion"
        v-for="(singleData, i) in data.checkBoxs"
        :key="i"
      >
        <!-- <input
          type="checkbox"
          class="filter-checkbox-option"
          :name="singleData"
          @change="handleCheck($event)"
          :value="{ category: data.category, specification: singleData }"
        /> -->
        <input
          type="checkbox"
          class="filter-checkbox-option"
          :name="singleData"
          @change="handleCheck($event)"
          :value="{ category: data.category, specification: singleData }"
        />
        <span class="filter-name">{{ singleData }}</span>
      </div>
      <hr class="filter-hr" v-if="index != filterItems.length - 1" />
    </div>
    <div class="filter-button-container">
      <button type="button" class="action-button" @click="applyFilter()">
        Apply filter
      </button>
      <button type="button" class="clear-filter-btn" @click="clearFilter()">Clear</button>
    </div>
  </div>
</template>
<script>
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
    clearFilter(){
      this.selectedFilter = [];
      this.$emit("filterClear");
      const allCheckbox = document.getElementsByClassName("filter-checkbox-option");
     for (var i = 0; i < allCheckbox.length; i++) {
            if (allCheckbox[i].type == 'checkbox')
                allCheckbox[i].checked = false;
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
      console.log(updatedList)
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
</script>
<style>
.clear-filter-btn {
  background-color: transparent;
  color: #0096da;
  border: 2px solid #0096da;
  width: 100%;
  height: 35px;
  font-size: 14px;
  border-radius: 10px;
  padding: 5px 15px;
  margin: auto;
  margin-top: 20px;
}

.filter-button-container {
  display: flex;
  flex-direction: row;
  column-gap: 5px;
}
</style>
