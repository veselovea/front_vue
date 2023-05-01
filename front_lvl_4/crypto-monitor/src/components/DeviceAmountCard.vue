<template id="device-amount-card">
    <v-card
      class="mx-auto"
      max-width="368"
      theme="dark"
    >
      <v-card-item title="Summary"></v-card-item>
  
      <v-card-text class="py-0">
        <v-row align="center" no-gutters>
          <v-col
            class="text-h2"
            cols="6"
          >
            {{summary}}
          </v-col>
        </v-row>
      </v-card-text>
  
      <v-expand-transition>
        <div v-if="expand">
          <v-list class="bg-transparent">
            <v-list-item
              v-for="item in filters"
              :key="item.label"
              :title="item.label"
              :color="item.color"
            >
            <template v-slot:prepend>
              <v-avatar :color="item.color">
                <v-icon color="white">{{item.icon}}</v-icon>
              </v-avatar>
            </template>
            <template v-slot:append>
              <span>{{item.amount}}</span>
            </template>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>
  
      <v-divider></v-divider>
  
      <v-card-actions>
        <v-btn @click="expand = !expand">
          {{ !expand ? 'Full Report' : 'Hide Report' }}
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      summary: 94,
      filters: [
        { label: 'Online', amount: 84, color: '#2E7D32', icon: 'mdi-circle' },
        { label: 'Warning', amount: 2, color: '#FBC02D', icon: 'mdi-alert' },
        { label: 'Error', amount: 4, color: '#B71C1C', icon: 'mdi-alert-octagon' },
        { label: 'Offline', amount: 4, color: '#6b6b6b', icon: 'mdi-sleep' },
        { label: 'Not Configured', amount: 0, color: '#adadad', icon: 'mdi-cog' }
      ],
      expand: false
    }),
  }
</script>