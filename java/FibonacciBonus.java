public class FibonacciBonus {

  static int fibonacci(int n) {
    // compute the nth Fibonacci number and return it.
  if (n <= 1) return n;
  return fibonacci(n-2) + fibonacci(n-1);
  }

  public static void main(String... args) {
    
    if (args.length == 0) {
      System.out.println("Error: you must supply which Fibonacci number to compute");
      System.exit(1);
    }
    else {
      int conversion = Integer.parseInt(args[0]);
      System.out.println(fibonacci(conversion));
    }
  }

}
