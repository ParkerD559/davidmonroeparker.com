<template>
  <div class="home">
    <transition appear name="slide-right">
      <img
        alt="My Picture"
        height="300px"
        src="../assets/selfie.jpg"
      >
    </transition>
    <transition appear name="slide-left">
      <div>
        Hi, my name is David Parker.<br />
        Not sure what else to put here.
      </div>
    </transition>
  </div>
</template>

<style>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
}

.home img {
  border-radius: 150px;
  margin-right: 50px;
}

.slide-right-enter-active,
.slide-left-enter-active {
  position: relative;
  transition: all .4s ease-out;
}

.slide-right-enter {
  transform: translateX(-70vw);
}

.slide-left-enter {
  transform: translateX(70vw);
}
</style>
