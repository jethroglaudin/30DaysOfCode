using System;
public interface AdvancedArithmetic{
    int divisorSum(int n);
}
// My code below
public class Calculator : AdvancedArithmetic
{
    public int divisorSum(int n)
    {
        int total = 0;
        for (var i = 1; i <= n; i++)
        {
            if(n % i == 0)
            {
                total += i;
            }
        }
        return total;
    }
}
// My code above
class Solution{
    static void Main(string[] args){
        int n = Int32.Parse(Console.ReadLine());
      	AdvancedArithmetic myCalculator = new Calculator();
        int sum = myCalculator.divisorSum(n);
        Console.WriteLine("I implemented: AdvancedArithmetic\n" + sum); 
    }
}