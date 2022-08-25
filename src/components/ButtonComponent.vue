<template>
    <div>
        <button :type="type" @click="onClick()" class="action-button">{{ label }}</button>
    </div>
</template>
<script src="@/components/script/ButtonComponent.js"></script>
<style>
.action-button{
    background-color: #0096DA;
    color: white;
    border: none;
    width: 100%;
    height: 35px;
    font-size: 14px;
    border-radius: 10px;
    padding: 5px 15px;
    margin: auto;
    margin-top: 20px;
    display: block;
}
</style>