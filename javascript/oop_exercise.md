# Music Player

Let's create our own music player.

This player will:

 - Store a list of tracks -- for now just title of track
 - Add a track
 - Play current track
 - Move to next track
 - Move to previous track

### Create `Player` class

First of all we will need the `Player` class that will hold all the methods for the features.

Create the `PlayerClass` and initialize an instance of the class.

### Add and play a track

Now we need to be able to add tracks to our player.

Create the `add` method on the `Player` class. Remember to use the `prototype`. `add` will expect as a parameter a string and then we need to store it.

`play` method will print into the terminal the current track. For now the first track that we have stored.

By the end of this step you should be able to:

```javascript
// ...
player.add('drive');
player.play();
```

Remember that `play` should print the track in the terminal with `console.log`;

### Keeping track of the current track

Since we can store more than one track, we should be able to play all of them.

Implement `next` and `previous` methods that will move the current track accordingly.

```javascript
// ...
player.play(); // should print some track, ex: 'drive'
player.add('La Bamba');
player.next();
player.play();
// should print next track, in this example 'La Bamba'
```

*Edge case*

What happens if we call `next` and we are in the last track? Or `previous` and we are in the first track?

We recommend to start over from the beginning when calling `next` in last track. Moving to the last when `previous`.

### Add real Tracks!

Great, you now have a music player, but the tracks are just the title. However, a track usually has a title, artist, album, etc.

Let's create the `Track` class and create instances of the `Track` class. A class will have:

- Artist
- Title
- Album

```javascript
// ...
var driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
var laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

// instead of adding a string, we are actually adding a whole object
player.add(driveTrack);
player.add(laBambaTrack);

player.play()
```

When playing, rather than just getting the title we should get something like this:

```
Playing: Drive by Incubus
```

**Please email your solution to <learn@propulsionacademy.com> once you have finished the exercise.**

### Bonus steps

Some bonus steps that might be cool to try:

- Move the responsibility to print the info of the track to the track itself. Create `track.play()` method.
- Be able to select a specific track directly.
- Create a method on the player that will print all the stored tracks and their information.
- Change the `play` method. Now it should play one track every 2 seconds, until it is finished with all the tracks.
  - *Tip: use `setInterval`*
- Introduce a `stop` method that will stop the `play` method, preventing it from getting to the last track.
  - *Tip: use `setTimeout` to call `stop` after some time.*
