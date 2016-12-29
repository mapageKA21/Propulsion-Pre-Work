import java.util.stream.IntStream;

public class FactorialReduce {

  static int factorial(int n) {
    // compute n! and return it.
  return IntStream.rangeClosed(1, n).reduce(1, (a,b) -> a*b);
  }

  public static void main(String... args) {
    IntStream.rangeClosed(0, 5).forEach(n -> print(n));
  }

  private static void print(int n) {
    System.out.println(n + "! = " + factorial(n));
  }

}
