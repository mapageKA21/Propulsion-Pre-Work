import java.util.stream.IntStream;

public class FactorialIterative {

  static int factorial(int n) {
    // compute n! and return it.
    int result = 1;
    for (int i = n; i > 0; i--) {
      result = result * i;
    }
    return result;
  }

  public static void main(String... args) {
    IntStream.rangeClosed(0, 5).forEach(n -> print(n));
  }

  private static void print(int n) {
    System.out.println(n + "! = " + factorial(n));
  }

}
