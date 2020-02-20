<template>
  <div>
        <b-button class="neumorphismBtn myBtn my-3" @click="addItem">Add Item</b-button>
        <b-list-group>
            <transition-group name="slide">
                <b-list-group-item 
                    class="list-group-item" 
                    v-for="(number, index) in numbers" 
                    :key="number" 
                    @click="removeItem(index)" 
                    style="cursor: pointer;"
                    >{{number}}
                </b-list-group-item>
            </transition-group>
        </b-list-group>
  </div>
</template>

<script>
export default {
    data() {
        return {
            numbers: [1, 2, 3, 4, 5]
        }
    },
    methods: {
        addItem() {
            const pos = Math.floor(Math.random() * this.numbers.length);
            this.numbers.splice(pos, 0, this.numbers.length +1);
        },
        removeItem(index) {
            this.numbers.splice(index, 1);
        },
    }
}
</script>

<style>
.list-group-item:hover {
     background-color: #bfc8d5 !important;
}

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }to{
            transform: translateY(0px);
        }
    }

    @keyframes slide-out {
        from{
            transform: translateY(0px);
        }to {
            transform: translateY(20px);
        }
    }
</style>