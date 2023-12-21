const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 4', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cancel()
    console.log('Tarefa 1 Cancelada!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 4)]
regra.hour = 14
regra.second = 15

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})