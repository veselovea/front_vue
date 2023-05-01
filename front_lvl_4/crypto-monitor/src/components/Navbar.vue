<template>
    <v-navigation-drawer
          expand-on-hover
          rail
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://i.ytimg.com/vi/yzW_2u-FgEI/maxresdefault.jpg"
              title="Andrew IOGOGER"
              subtitle="andrewiogogoer@gmail.com"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home" title="Main" value="main" href="#/"></v-list-item>
            <v-list-item prepend-icon="mdi-devices" title="Devices" value="devices" href="#/devices"></v-list-item>
            <v-list-item prepend-icon="mdi-account-circle" title="My Account" value="myacc" href="#/me"></v-list-item>
          </v-list>
        </v-navigation-drawer>
</template>