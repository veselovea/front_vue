<template>
    <v-table theme="dark">
        <thead>
            <tr>
                <th class="text-left">Name</th>
                <th class="text-left">Client</th>
                <th class="text-left">Working time</th>
                <th class="text-left">Effectiveness</th>
                <th class="text-left">Consumption</th>
            </tr>
        </thead>
        <tbody>
            <DeviceTableItem
            v-for="item in devices"
            :key="item.name"
            :name="item.name"
            :status="item.status"
            :ip="item.ip"
            :serialNumber="item.serialNumber"
            :client="item.client"
            :clientEmail="item.clientEmail"
            :workingTime="item.workingTime"
            :effectiveness="item.effectiveness"
            :algorythm="item.algorythm"
            :consumption="item.consumption"
            ></DeviceTableItem>
        </tbody>
    </v-table>
</template>

<script>
    import DeviceTableItem from './DeviceTableItem.vue';
    export default {
        components: {
            DeviceTableItem
        },
        data() {
            return {
                devices: []
            }
        },
        methods: {
            init() {
                for (let index = 0; index < 96; index++) {
                    const element = { 
                        name: `device #${index}`,
                        status: `${Math.floor(Math.random() * 2) == 0 ? 'not alive' : 'alive'}`,
                        ip: '192.168.100.0',
                        serialNumber: 'asd21ompqwodmqwq23',
                        client: 'Oqpo.Okq',
                        clientEmail: 'oqpo.okq@mymail.ip',
                        workingTime: 0,
                        effectiveness: 50,
                        algorythm: 'SHA-256',
                        consumption: 100
                    };
                    this.devices.push(element);
                }
            }
        },
        created() {
            this.init()
        }
    }
</script>