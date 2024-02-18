const harvester = require("./role.harvester");
const upgrader = require("./role.upgrader");

module.exports.loop = function () {
  Game.spawns["Spawn1"].spawnCreep(
    [WORK, CARRY, MOVE],
    `creep${Math.random() * 999999999}`,
  );
  Object.values(Game.creeps).forEach((creep) => {
    if (creep.memory.role === "harvester") harvester.run(creep);
    if (creep.memory.role === "upgrader") upgrader.run(creep);
  });
};
