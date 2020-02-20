<template>
  <div>
      <b-row class="p-md-4 mx-4" cols="1" cols-md="2" align-content="center">
      <b-col xs="auto" sm="auto" md="12" lg="12">
            <h1>Vuejs</h1>
            <hr>
            <p>
                Vuejs is an amazing open source JavaScript framework used to develop interactive interfaces. Vue focuses on the view layer, and is easy 
                to integrate with other libraries or existing projects. Vue is also capable of powering Single-Page Applications like this one.
            </p> 
            <p>
                On this page you can see some of the basic things that vue can simplify in your projects. If you want to learn more about Vuejs you 
                can find the official documentation <a href="https://vuejs.org/v2/guide/" target="_blank">here</a>
            </p>
            <h4>Two-way Binding</h4>
            <p>Here is an example of how Vuejs can react to user input in real time.</p>
            <input type="text" v-model="text">
            <p>Vue is reacting here: {{text}}</p>
            <br>
            <h4>Using v-if to add and remove elements to the DOM</h4>
            <p>By using vues "v-if" property we can assign when an element should be added to the DOM. V-if does not simply
                turn the component invisible, it either completely removes it, or adds it to the DOM.
            </p>
            <b-button class="neumorphismBtn myBtn my-3" @click="isAdded = !isAdded">Test v-if</b-button>
            <b-card class="neumorphism m-2 text-center" v-if="isAdded">Now you see me!</b-card>
            <br><br>
            <h4>Dynamically Creating a List using v-for</h4>
            <p>Using the v-for property we can loop through an object and add each object to a list. 
                Combining this with the two-way binding example above, we can create user generated lists
                in real time.
            </p>
            <input type="text" v-model="listItem">
            <br>
            <b-button class="neumorphismBtn myBtn my-3" @click="list.push(listItem)">Add Item</b-button>
            <ul>
                <li v-for="(item, index) in list" :key=index>{{ item }}</li>
            </ul>
            <br>
            <h4>Using Computed Properties to filter content</h4>
            <p>Vue can take use computed properties to sort through content and only 
                display what you are filtering for.
            </p>
            <p>Filter for fruits: </p>
            <input type="text" v-model="filterText">
            <ul>
                <li v-for="(item, index) in filteredFruits" :key=index>{{ item }}</li>
            </ul>
            <br>
            <h4>Animations and Transitions</h4>
            <p>Vuejs can also help you implement animation and transitions easily. Click the "Add Item" button to 
                add an item to the list. You can also click on an item to remove it from the list. Both adding and
                removing items will give you smooth animation.
            </p>
            <vue-animated-list></vue-animated-list>
            <br>
            <hr>
            <p>These are just some of the things that vue makes easy. I encourage you to learn vue yourself and explore
                what makes it such a valuable framework to use.
            </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {vueDemoMixin} from '../vueDemoMixin.js';
import AnimatedList from '../components/AnimatedList.vue';
export default {
    name: "Vuejs",
    mixins: [vueDemoMixin],
    data() {
        return {
            text: "",
            list: ["First Item"],
            listItem: "",
            isAdded: false
        }
    },
    components: {
        vueAnimatedList: AnimatedList
    }

}
</script>
<style>

.neumorphismBtn {
  background-color: #f1f1f1 !important;
  box-shadow: 
    -3px -3px 10px 5px rgba(255,255,255,1),
    3px 3px 10px 1px rgba(0,0,0,0.3) !important;
}
</style>