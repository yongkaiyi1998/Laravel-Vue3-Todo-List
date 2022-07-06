<template>
    <div>
        <div v-for="(item, index) in items" :key="index">
            <list-item
            :item="item"
            class="item"
            @itemchanged="$emit('reloadlist')"
            ></list-item>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items'],
}
</script>

<style scoped>
    .item{
        background: #e6e6e6;
        padding: 5px;
        margin-top: 5px;
    }
</style>