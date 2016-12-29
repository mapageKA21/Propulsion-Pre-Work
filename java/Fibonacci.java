public class Fibonacci {

  static int fibonacci(int n) {
    // compute the nth Fibonacci number and return it.
  if (n <= 1) return n;
  return fibonacci(n-2) + fibonacci(n-1);
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
