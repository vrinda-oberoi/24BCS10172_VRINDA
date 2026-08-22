import java.util.*;

public class warehouse {
	public static void main(String[] args) {
		int limit = 5;

		ArrayList<ArrayList<Integer>> warehouse = new ArrayList<>();
		warehouse.add(new ArrayList<>(Arrays.asList(5, 12, 3)));
		warehouse.add(new ArrayList<>(Arrays.asList(8, 2, 15)));
		warehouse.add(new ArrayList<>(Arrays.asList(1, 20, 4)));

		LinkedList<Integer> result = new LinkedList<>();
		for (ArrayList<Integer> W: warehouse) {
			for (int stock : W) {
				if (stock < limit) {
					result.add(stock * 2);
				}
			}
		}

		for (int idx = 0; idx < warehouse.size(); idx++) {
			System.out.println("Section " + idx + ": " + warehouse.get(idx));
		}
		System.out.println("Reorder requests: " + result);
	}
}
