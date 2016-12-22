# Object Oriented in Javascript

In class-based OOP, we first create a class to serve as the "blueprint" and then we create instances of that "blueprint".

However, in Javascript we don't have the classical "blueprint" creation. We won't go into detail at this point about the differences. For now you should now that we are going to use `function` as our "blueprint". Those `function`s that we use as "blueprint" are also called `constructor`.

### Constructor

To create our `Animal` "blueprint, we define the `Animal` "constructor".

```javascript
function Animal(){}
```

As you can see this is a normal function. The name of the function starting with capital letter it's a convention. It means that this function is going to be used as a "constructor".

When we want to create a new instance, we use the keyword `new` and we call the "constructor".

```javascript
var someAnimal = new Animal();
```

We just create an instance of our `Animal` class. `someAnimal` is an object, which has been created using the `Animal` constructor.

This was our first simple apporoach. Most of the times, we would want our instances to have some specific properties.

### Adding properties to our instances

In order to assign properties to a specific instance we will pass them as parametes of the "constructor" and use the keyword `this` to attach them to the instance.

```javascript
function Animal(type, name, sound) {
  this.animalType = type;
  this.name = name;
  this.sound = sound;
}
```

We are creating new properties on the instances. `animalType`, `sound` and `name` will be properties of the instance. The value of these properties will be what we pass when we create the instance.

```javascript
var cat = new Animal('cat', 'Bukowski', 'meow');
```

Now the `cat` is an instance of `Animal`. It has also the `animalType`, `sound` and `name` properties.

```javascript
cat.animalType // 'cat'
cat.name // 'Bukowski'
cat.sound // 'meow'
```

By the way, not all properties need to be passed as argument. We could have properties that have the same value for all the instances.

```javascript
function Animal(type, name, sound) {
  this.animalType = type;
  this.name = name;
  this.sound = sound;
  this.isAlive = true;
  this.friends = [];
}
```

Now the instances will also have `isAlive` and `friends` properties. Which will be set to `true` and an empty array respectively.

```javascript
cat.isAlive // true
cat.friends.length // 0
```

### Implement behaviour through methods

Let's get fancy. Classes are used in order to encapsulate behaviour. Behaviour usually means methods, not just state.

How do we add methods to our class? There are many ways in Javascript to do that. For now we are going to stick to one of the most common ways.

We will be using the `prototype` property of the functions. Remember that everything in Javascript is an Object, which means that functions are also objects. One of the properties that all the functions have is `prototype`. We are going to attach the methods here, so that all the instances have access to it through the *Prototypal Inheritance Chain*. Fancy name for saying that the instances have access to that `prototype` property of the class.

In our example:

```javascript
function Animal(type, name, sound) {
  this.animalType = type;
  this.name = name;
  this.sound = sound;
  this.isAlive = true;
  this.friends = [];
}

Animal.prototype
// this is the property where we are going to attach the methods

Animal.protoype.talk = function() {
  console.log('I am so tired of talking about animals');
}
```

Now our instances will be able to use the function

```javascript
cat.talk(); // it will print 'I am so tired of talking about animals'
```

### Combining methods and properties

From inside the methods we can access the properties of that specific instance. We can use the keyword `this` for it.

```javascript
Animal.prototype.talk = function() {
  console.log('My sound apparently is ' + this.sound);
}
```

`this.sound` inside the `talk` will refer to the `sound` property of the specific object where we called `talk`. Since we called `cat.talk()`, it means that `this.sound` inside `talk` will be as if we did `cat.sound`.

*To be fair, this is more complicated than this. But for now we will stick to this explanation ;)*

### Things we learned

- How to define a "constructor" function that will allow us to have a Class and create instances.
- Define properties in the `constructor` and use them to customize our instances
- Add behviour to our classes with methods through the `prototype` property on the functions
- How to access the properties of the instance from the methods

**Congratulations! You just created your first class in Javascript!**

### Follow up

Add the method `addFriend` that adds a friend to our instance. Particularly, it should add the friend to the `friends` array.

```javascript
var cat = new Animal('cat', 'Bukowski', 'meow');
var dog = new Animal('cat', 'Fante', 'woof');
cat.addFriend(dog);
```

After being able to add friends we want a method that will tell us how many friends an animal has.

```javascript
...
cat.numFriends() // should return 1
```

### Bonus

The properties of our `Animal` so far are:

- `sound`: which is a string
- `animalType`: another `string`
- `name`: `string` again
- `isAlive`: `boolean`
- `friends`: an array. An array of what? Can you guess? An array of other `Animal` instances

How weird is that we have instances of the same class inside one instance? Not weird at all. One important thing to learn, is that there is no hirearchy in code.

An instance doesn't have to have primitive numbers as properties. The properties can be anything. Even a list of instances of the same class, which by the way, also have a list of instances of the same class, which have also a list of instances of the same class, which have the same type of list, etc etc. Hopefully you get the point.

Let's implement a method `getFriends` on our `Animal` class that will print all the names of its friends.
