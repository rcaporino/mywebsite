<template>
  <div>
    <b-row class="p-md-4 mx-md-4" cols="1" cols-md="2" align-content="center">
      <b-col xs="auto" sm="auto" md="12" lg="12">
        <h1 class="text-md-left text-center">Education and Skills</h1>
        <hr>
        <p class="text-left">I have recently graduated from Saint Joseph's College in Patchogue, NY, with a
        <b>Bachelors in Math and Computer Science</b>.
        </p>
      </b-col>
    </b-row>

    <b-row class="px-md-4 pm-md-4 mx-md-4 mb-4 " cols="1" cols-md="2" align-content="center" v-bind="showSm">
      <b-col>
        <ul>
          <li v-for="(course,index) in coursesCompleted" :key="index">{{course}}</li>
        </ul>
      </b-col>
    </b-row>

    <b-row class="px-md-4 pm-md-4 mx-md-4 mb-4 " cols="1" cols-md="2" align-content="center" v-bind="showMedPlus">
      <b-col lg="10">
        <h4>Relevent Courses Completed: </h4>
        <br>
        <b-row>
          <b-col>
            <ul>
              <li v-for="(course,index) in coursesCompletedHalves.first" :key="index">{{course}}</li>
            </ul>
          </b-col>
          <b-col>
            <ul>
              <li v-for="(course,index) in coursesCompletedHalves.last" :key="index">{{course}}</li>
            </ul>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="px-md-4 mx-md-4" cols="1" cols-md="2" align-content="center">
      <b-col lg="10">
        <h4>Skill Set</h4>
        <p>The languages I have used are: </p>
        <ul>
          <li v-for="(skill, index) in skills" :key="index">{{skill}}</li>
        </ul>
        <p>
          I have also explored a few different tools and frameworks while doing some projects such as: 
          Vuejs, Git, Bootstrap, Bootstrap-vue, MySQL, Firebase, and Visual Studio Code. I am also currently
          taking a course on Flutter and Dart to expand my knowledge on how to make native mobile apps for 
          both IOS and Android.
        </p>
        
        <p>
          I have a proficient understanding of JavaScript, and Java, as well as a decent grasp on VueJs. I'm a team player who 
          works well with others and is a fast learner. My passion for computer science causes me to go out of my way to make sure 
          I really understand the tools I am working with. 
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Education",
  data() {
    return {
      showSm: {
        class: "d-md-none"
      },
      showMedPlus: {
        class: "d-none d-md-block"
      },
      coursesCompleted: [
        'Intro to Computer Science',
        'Intro to Java',
        'Java Programming',
        'Advanced Java',
        'Algorithms and Data Structures',
        'Scripting Languages',
        'Database Systems',
        'Advanced Database Systems',
        'Mobile Applications',
        'Software Engineering & Methodology',
        'Operating Systems',
        'Discrete Mathematics',
        'Calculus I',
        'Calculus II',
        'Linear Algebra'
      ],
      skills: [
        'Java',
        'JavaScript',
        'Python',
        'R',
        'SQL',
        'PL/SQL',
        'XML',
        'HTML',
        'CSS',
        'JSON',
        'Visual Basic'
      ],
      toolsAndFrameworks: [
        'Vuejs',
        'Git',
        'Bootstrap',
        'Bootstrap-vue',
        'MySQL',
        'Firebase',
        'Visual Studio Code'
      ]
    }
  },
  computed: {
    coursesCompletedHalves() {
      let middle = Math.round(this.coursesCompleted.length/2);
      let firstHalf = this.coursesCompleted.slice(0, middle);
      let lastHalf = this.coursesCompleted.slice(middle);
      return { 
        'first': firstHalf,
        'last': lastHalf
      }
    },
    skillsHalves() {
      let middle = Math.round(this.skills.length/2);
      let firstHalf = this.skills.slice(0, middle);
      let lastHalf = this.skills.slice(middle);
      return { 
        'first': firstHalf,
        'last': lastHalf
      }
    },
    toolsAndFrameworksHalves() {
      let middle = Math.round(this.toolsAndFrameworks.length/2);
      let firstHalf = this.toolsAndFrameworks.slice(0, middle);
      let lastHalf = this.toolsAndFrameworks.slice(middle);
      return { 
        'first': firstHalf,
        'last': lastHalf
      }
    },

  }
}
</script>