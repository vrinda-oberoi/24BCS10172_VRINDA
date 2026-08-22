// Employee Salary Analytics
// Problem Statement
// You are given a list of employees where each employee has an ID, a name, and a monthly salary.
// Write a Java program using the Java Stream API to extract the following three specific salary insights from the list:
// Highest Salary: The maximum salary earned by any employee.
// 2nd Highest Salary: The second distinct maximum salary in the list.
// Lowest Salary: The minimum salary earned by any employee.

import java.util.*;
import java.util.stream.Collectors;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public double getSalary() { return salary; }
}

public class SalaryAnalytics {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee(101, "Alice", 120000.0),
            new Employee(102, "Bob", 120000.0),   // Duplicate top salary
            new Employee(103, "Charlie", 95000.0),
            new Employee(104, "David", 80000.0),
            new Employee(105, "Emma", 45000.0)
        );

        // TODO 1: Find Highest Salary
        double highest = employees.stream()
            .map(Employee::getSalary)
            .sorted(Comparator.reverseOrder())
            .limit(1)
            .findFirst()
            .orElse(0.0);

        // TODO 2: Find 2nd Highest Distinct Salary
        Optional<Double> secondHighest = employees.stream()
            .map(Employee::getSalary)
            .distinct()
            .sorted(Comparator.reverseOrder())
            .skip(1)
            .findFirst();

        // TODO 3: Find Lowest Salary
        double lowest = employees.stream()
            .map(Employee::getSalary)
            .sorted()
            .findFirst()
            .orElse(0.0);

        // Print your results
        System.out.println("Highest Salary: " + highest);
        System.out.println("2nd Highest Distinct Salary: " + secondHighest.orElse(0.0));
        System.out.println("Lowest Salary: " + lowest);
    }
}
