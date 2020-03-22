<template>
  <div class="sort">
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
        @update='sort'
      >
        <transition-group type="transition" name="flip-list">
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.order }}
            {{ element.name }}
            <img src="@/assets/sort.png" class="logo"/>
          </li>
        </transition-group>
      </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [
  "选项A",
  "选项B",
  "选项C",
  "选项D"
];
export default {
  name: 'Sort',
  display: "Transition",
  order: 6,
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      })
    };
  },
  methods: {
    sort() {
      // console.log(this.list);
      for(var index in this.list){
        // console.log(typeof index);//index是string类型的
         var index=parseInt(index);//把string转化为number
        // console.log(typeof index)//此时index是number类型的
        this.list[index].order=index+1;
      }
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 150,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.sort{
  background-color: #fff;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  padding: 0;
  font-size: 32px;
  margin-left: 18px;
}
.list-group-item {
  width: 100%;
  cursor: move;
  list-style: none;
  height: 100px;
  line-height: 100px;
  border-top: 1px solid #ccc;
  position: relative;
}
.list-group-item i {
  cursor: pointer;
}
.logo{
  width: 60px;
  position: absolute;
  right:18px;
  top:20px;
}
</style>
