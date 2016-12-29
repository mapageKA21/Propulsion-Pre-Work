import java.util.stream.IntStream;

public class FactorialRecursive {

	static int factorial(int n) {
		// compute n! and return it.
		if (n == 0) return 1;
		else return n * factorial(n-1);
	}

	public static void main(String... args) {
		IntStream.rangeClosed(0, 5).forEach(n -> print(n));
	}

	private static void print(int n) {
		System.out.println(n + "! = " + factorial(n));
	}

}
