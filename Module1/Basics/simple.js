//A callback function can also be used for this specific example.
//Howeve, for more complex cases EventEmitter can be used
    
const EventEmitter = require('events')
class Job extends EventEmitter {}    
job = new Job();

//Observer or EventListener
job.on('done', function(timeDone){
    console.log("Job finished", timeDone)
});

//Emitting an event
job.emit('done', new Date())
job.removeAllListeners()