var chai = require("chai");
chai.Should();
chai.use(require('chai-things'));


describe('130306 Wind Data', function () {
  it('Apparent sentence converts', function () {
    var tree = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2013-10-08-15:47:28.263","prio":"2","src":"1","dst":"255","pgn":"130306","description":"Wind Data","fields":{"SID":"67","Wind Speed":"6.22","Wind Angle":"50.0","Reference":"Apparent"}}'));
    tree.should.have.deep.property('environment.windSpeedApparent.value', 6.22);
    tree.should.have.deep.property('environment.windAngleApparent.value', 50.0);
  });

  it('True Boat sentence converts', function () {
    var tree = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2013-10-08-15:47:28.264","prio":"2","src":"1","dst":"255","pgn":"130306","description":"Wind Data","fields":{"SID":"68","Wind Speed":"4.89","Wind Angle":"86.0","Reference":"True (boat referenced)"}}'));
    tree.should.have.deep.property('environment.windSpeedTrueBoat.value', 4.89);
    tree.should.have.deep.property('environment.windAngleTrueBoat.value', 86);
  });

  it('True Ground sentence converts', function () {
    var tree = require("../n2kMapper.js").toNested(
      JSON.parse('{"timestamp":"2013-10-08-15:47:28.264","prio":"2","src":"3","dst":"255","pgn":"130306","description":"Wind Data","fields":{"SID":"94","Wind Speed":"4.82","Wind Angle":"218.6","Reference":"True (ground referenced to North)"}}'));
    tree.should.have.deep.property('environment.windSpeedTrueGround.value', 4.82);
    tree.should.have.deep.property('environment.windAngleTrueGround.value', 218.6);
  });

});




