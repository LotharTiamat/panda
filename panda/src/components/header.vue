<template lang="">
    <header>
    <img src="../assets/favicon.ico" class="icon">
    <span class="title">胖达环游世界</span>
    <!-- <nav class="nav">
        <input type="radio" name="nav-item-opt" id="nav-item-opt-1" checked>
        <label class="nav-item" for="nav-item-opt-1">外交熊猫篇</label>
        <input type="radio" name="nav-item-opt" id="nav-item-opt-2">
        <label class="nav-item" for="nav-item-opt-2">本土熊猫篇</label>
        <div class="tracker"></div>
    </nav> -->
    </header>
</template>
<script>
export default {

}
</script>
<style lang="css">
.title {
    font-size: 0.5rem;
    color: black;
    font-weight: bold;
    text-align: center;
    line-height: 0.5rem;
    margin: 0.1rem;
}

header {
    margin: 0 0.5rem;
    display: flex;
    /* justify-content: space-between;
    align-items: center; */
}

/* :root {
    --bg-color: white;
    --main-color: #e2c027;
    --nav-item-width: 100px;
    --nav-item-height: 32px;
    --nav-item-border-width: 4px;
}

body {
    /* display: flex;
    justify-content: center;
    align-items: center; */
/* background: var(--bg-color);
} */


/* .nav {

    position: relative;
    background: white;
    border-radius: 24px;
    height: 0.55rem;
    width: 6rem;
    margin: 0.1rem;
    font-size: 0;
    padding: var(--nav-item-border-width);
    z-index: 1;
}

.nav-item {
    width: var(--nav-item-width);
    height: 0.4rem;
    font-size: 14px;
    color: var(--main-color);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: color .3s ease-in-out;
}

.nav>input[type="radio"] {
    width: 0;
    height: 0;
    opacity: 0;
}

.nav>input[type="radio"]:checked+label {
    color: white;
}

.tracker {
    width: var(--nav-item-width);
    height: 0.45rem;
    background: var(--main-color);
    z-index: -1;
    position: absolute;
    left: var(--nav-item-border-width);
    top: var(--nav-item-border-width);
    border-radius: 24px;
    transition: transform .3s ease-in-out;
}

#nav-item-opt-2:checked~.tracker {
    transform: translateX(calc(var(--nav-item-width)));
}

#nav-item-opt-3:checked~.tracker {
    transform: translateX(calc(var(--nav-item-width)*2));
} */
.icon {
    width: 2.5%;
    height: 2.5%;
    margin: 0.05rem;
}
</style>