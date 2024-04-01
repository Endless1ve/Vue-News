<template>
  <div class="menuIcons">
    <!-- <IconBase :iconName="'Авторизация'"> <ProfileIcon /></IconBase> -->
    <div class="iconsContent">
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
