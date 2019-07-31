/**
 * Observer pattern
 * Keep the emitter class definition and event emission into different modules 
 * but allow the observers to be defined in a main prog
 */

 const EventEmitter = require('events')
 class Job extends EventEmitter {
     constructor(ops){
        super(ops)
        this.on('start', ()=>{
            this.process()
        })
     }
     
     process() {
         setTimeout(() => {
             this.emit('done', {completedOn: new Date()}, 700)
         })
     }
 }

 module.exports = Job