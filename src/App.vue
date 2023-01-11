<template>
  <div>
    <router-view/>
  </div>
</template>

<style lang="scss">

.page-link {
  border-radius: 30px !important;
  width: 30px;
  height: 30px;
  margin: 0 2px;
  border: none !important;
  background-color: transparent !important;
  color: rgb(215, 222, 230) !important;
  font-size: 18px;
  box-shadow: none !important;
  outline: none !important;
  padding: 5px
}

.page-link:hover {
  color: rgb(230, 230, 230) !important;
}

.active {
  background-color: rgb(52, 44, 116) !important;
  color: rgb(255, 248, 248) !important;
  border-radius: 48%;
}

tbody tr:hover {
  background: rgb(225, 225, 237);
  opacity: 0.5;
  cursor: pointer;
}
</style>>
