# Java Exercises

Any of these exercises can be completed using a standard text editor
and the JDK tools on the command line; however, it is recommended that
you make use of the features of a powerful IDE (integrated development
environment) such as Eclipse.

**Table of Contents**

- [Command Line Arguments](#1-command-line-arguments)
- [Fibonacci](#2-fibonacci)
- [Factorial](#3-factorial)

<!--
- [Reading from Files](#4-reading-from-files)
- [Building a Calculator](#5-building-a-calculator)
-->

----------------------------------------------------------------------

## 1. Command Line Arguments

Now that you're familiar with the standard "Hello, World!" application
in Java, let's take it to the next level.

Instead of printing "Hello, World!" to the console, we would like to
say hello to a person whose name is supplied as a command line argument
to our application.

Recall that command line arguments are supplied to a Java application
as an array of strings that are passed to the application's `main`
method (e.g., `public static void main(String[] args)`).

Note that command line arguments can also be supplied to a Java
application launched within Eclipse. Right click on the Java source
code, and choose Run As / Run Configurations. Then supply a Program
Argument in the Arguments tab, and run the application.

### Tasks

1. Create a copy of the `HelloWorld` application named `Hello`.
1. Construct a `String` from `"Hello, "`, the first command line argument
   supplied to the application, and `"!"`.
1. Print that concatenated string to the console.
1. Verify the expected behavior as outlined in the examples below.

### Example Output

- `java Hello World` prints out the familiar "Hello, World!" text.
- `java Hello Dilbert` prints "Hello, Dilbert!" to the console.
- If no command line arguments are supplied, the application should
  print "Hello, Unknown!".

### Bonus Work

If multiple command line arguments are supplied to our `Hello`
application, say hello to each of the named persons. For example,
executing `java Hello Dogbert Catbert Ratbert` should result in the
following output.

```
Hello, Dogbert!
Hello, Catbert!
Hello, Ratbert!
```

But... `java Hello` should still print out "Hello, Unknown!".

----------------------------------------------------------------------

## 2. Fibonacci 

Write a function that computes the nth
[Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number),
where `f(n) = f(n-1) + f(n-2)`, given `n >= 0`, `f(0) = 1`, and
`f(1) = 1`.

```java
public class Fibonacci {

	static int fibonacci(int n) {
		// compute the nth Fibonacci number and return it.
	}

	public static void main(String... args) {
		System.out.println(fibonacci(0));  // 0
		System.out.println(fibonacci(1));  // 1
		System.out.println(fibonacci(2));  // 1
		System.out.println(fibonacci(3));  // 2
		System.out.println(fibonacci(7));  // 13
		System.out.println(fibonacci(12)); // 144
	}
}
```

### Bonus Work

Modify the `Fibonacci` application so that it computes the Fibonacci
number for a number supplied as a command line argument and prints
the Fibonacci number to the console. For example, executing
`java Fibonacci 12` should print `144` to the console. If no command
line argument is supplied, the application should print
"Error: you must supply which Fibonacci number to compute" and exit
with a status code of `1`. Hints: `Integer.parseInt(str)` converts a
`String` to an `int`, and `System.exit(...)` allows you to exit with
a specified status code.

**Food for Thought**: when printing the error message for a missing
command line argument, should you use `System.out` or `System.err`?

----------------------------------------------------------------------

## 3. Factorial

Write a function that computes the
[factorial](https://en.wikipedia.org/wiki/Factorial) of a non-negative
integer (denoted `n!`), where `f(n) = n * f(n-1)`, given `n >= 0` and
`f(0) = 1`.

```java
import java.util.stream.IntStream;

public class Factorial {

	static int factorial(int n) {
		// compute n! and return it.
	}

	public static void main(String... args) {
		IntStream.rangeClosed(0, 5).forEach(n -> print(n));
	}

	private static void print(int n) {
		System.out.println(n + "! = " + factorial(n));
	}

}
```

### Example Output

Executing the `Factorial` application should print the following
to the console.

```
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120
``` 

### Bonus Work

If you implemented `factorial()` using _recursion_, comment out your
solution and implement `factorial()` using an _iterative_ loop.

If you implemented `factorial()` using an _iterative_ loop, comment
out your solution and implement `factorial()` using _recursion_.

If you are familiar with (or interested in) streams and lambda
expressions, comment out your solution and implement `factorial()`
using an `IntStream` with a _closed range_ from 1 to n that you
then _reduce_ to a single integer by multiplying each element in the
stream by the previously accumulated value.

**Food for Thought**: when would you want to use a *recursive* vs. an
*iterative* vs. a *functional* solution?

----------------------------------------------------------------------
<!--
## 4. Reading from Files

### Tasks

### Example Output

### Bonus Work

----------------------------------------------------------------------

## 5. Building a Calculator

### Tasks

### Example Output

### Bonus Work

----------------------------------------------------------------------
-->
