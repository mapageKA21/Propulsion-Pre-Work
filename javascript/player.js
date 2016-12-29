
function Player() {
  this.tracks = [];
  this.current = 0;
  this.interval;
}

var player = new Player();

Player.prototype.add = function(track) {
  this.tracks.push(track);
}

Player.prototype.play = function() {
  console.log(`Playing: ${this.tracks[this.current].title} by ${this.tracks[this.current].artist}`);
}

Player.prototype.next = function() {
  if (this.current === this.tracks.length - 1) this.current = 0;
  else (this.current ++);
}

Player.prototype.previous = function() {
  if (this.current === 0) this.current = this.tracks.length - 1;
  else (this.current --);
}

Player.prototype.playEvery2secs = function() {
  var that = this;
  that.interval = setInterval(function() {
    console.log(`Playing: ${that.tracks[that.current].title} by ${that.tracks[that.current].artist}`);
    if (that.current < that.tracks.length - 1) that.current ++;
    else clearInterval(that.interval);
  }, 1500);
}

Player.prototype.stop = function() {
  var that = this;
  setTimeout(function() {
    console.log(`stopped`);
    clearInterval(that.interval);
  }, 5000);
}

Player.prototype.playAll = function() {
  this.tracks.forEach(function(track) {
    console.log(`${track.title} by ${track.artist} from ${track.album}.`);
  });
}

Player.prototype.select = function(track) {
  this.current = this.tracks.indexOf(track);
}

function Track(artist, title, album) {
  this.artist = artist;
  this.title = title;
  this.album = album;
}

Track.prototype.play = function (track) {
  console.log(`Playing: ${this.title} by ${this.artist}`);
}

var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
var laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');
var direStraits = new Track('Dire Straits', 'Money for nothing', 'Alchemy');
var queen = new Track('Queen', 'We are the champions', 'Greatest hits');


player.add(driveTrack);
player.add(laBambaTrack);
player.add(direStraits);
player.add(queen);
console.log(player.tracks.length);
console.log(player.current);
console.log(player.current);
player.play();
direStraits.play();
player.playAll();
player.playEvery2secs();
player.stop();






