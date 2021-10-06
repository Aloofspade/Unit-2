const eventEmitter = require("events")

const customEmitter = new eventEmitter()

customEmitter.on("request", (name, id) => {
    console.log(`data for ${name} : id ${id}`);
})


customEmitter.on("testing", (id) => {
    console.log(`another function here ${id}`);
})

customEmitter.emit("testing", "john", 12345);