<template>
  <div class="menuIcons">
    <IconBase v-if="!isAuth" :iconName="'Авторизация'">
      <ProfileIcon />
    </IconBase>
    <div v-else class="iconsContent">
      <RouterLink to="/">
        <IconBase :iconName="'Профиль'"><ProfileIcon /></IconBase>
      </RouterLink>
      <RouterLink to="/about">
        <IconBase :iconName="'Настройки'">
          <SettingsIcon />
        </IconBase>
      </RouterLink>
      <IconBase :iconName="'Выйти'"><ExitIcon /></IconBase>
    </div>
  </div>
</template>

<script>
  import MenuIcons from "./MenuIcons.model";

  export default MenuIcons;
</script>

<style lang="scss" scoped>
  @import "./MenuIcons.module";
</style>
