<template>
  <div class="settings">
    <div class="header">Настройки</div>
    <div class="checkbox">
      <input type="checkbox" id="checkbox-settings-autoupdate" v-model="isChecked" />
      <label for="checkbox-settings-autoupdate">Автообновление</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Settings',

    computed: {
      isChecked: {
        get() {
          return this.$store.state.fetchData.isAutoUpdateEnabled;
        },
        set(value) {
          this.$store.dispatch('CHANGE_AUTO_UPDATE_STATUS', value);
        }
      }
    }
  };
</script>

<style scoped>
  .settings {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 20px);
    box-sizing: border-box;
    background-color: #f5f5f5;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
  }

  .header {
    padding-bottom: 10px;
    box-sizing: border-box;
  }

    .checkbox {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 0;
        border-top: 1px solid #8d8d8d;
    }
</style>
