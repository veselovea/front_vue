<style>
    .device_alive {
        color: green;
    }
    .device_not_alive {
        color: red;
    }
</style>

<template>
    <tr :class=" {
            device_alive: status == 'alive',
            device_not_alive: status == 'not alive'
        }">
        <!-- Name -->
        <td>
            <div><span>{{status}}</span></div>
            <div><h2>{{name}}</h2></div>
            <div><span>{{ip}}</span></div>
            <div><span>{{serialNumber}}</span></div>
        </td>
        <!-- Client -->
        <td>
            <div>{{client}}</div>
            <div>{{clientEmail}}</div>
        </td>
        <!-- Working time -->
        <td>{{workingTime}}</td>
        <!-- Effectiveness -->
        <td>
            <div>{{effectiveness}}%</div>
            <div>{{algorythm}}</div>
        </td>
        <!-- Consumption -->
        <td>{{consumption}}</td>
    </tr>
</template>

<script>
    export default {
        props: {
            name: { type: String, required: true },
            status: { type: String, required: true },
            ip: { type: String },
            serialNumber: { type: String },
            client: { type: String },
            clientEmail: { type: String },
            workingTime: { type: Number },
            effectiveness: { type: Number },
            algorythm: { type: String },
            consumption: { type: Number }
        }
    }
</script>