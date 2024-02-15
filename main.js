const harvester = require("./role.harvester");
module.exports.loop = function() {
  const creeps = Game.creeps;
  for (let creep of Object.values(creeps)) {
    harvester.run(creep);
  }
}
