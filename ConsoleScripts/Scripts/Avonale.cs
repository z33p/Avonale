using System;
using System.Collections.Generic;

namespace Scripts
{
  public class Avonale
  {
    public static List<int> ReverseList(List<int> list, int length)
    {
      // Recursivo que retorne uma lista de forma invertida.
      if (length == 0) return new List<int> { };

      var unitList = new List<int> { list[--length] };

      unitList.AddRange(ReverseList(list, length));

      return unitList;
    }


    public static double AverageAndHigher(List<int> list, int length, double sum = 0)
    {
      /** Recursivo que imprima a média dos elementos de uma lista de inteiros
      * e o número de elementos maiores do que a média. */
      double average = 0;

      if (length == 0)
      {
        // Last Recursive Execution 
        average = sum / list.Count;
        Console.WriteLine($"Média: {average} :: Soma: {sum}");
        return average;
      };

      var last = length - 1;

      if (list.Count == length)
      {
        // First Execution
        sum = AverageAndHigher(list, last, sum: list[last]);

        if (list[last] > sum) Console.WriteLine($"Maior que média: {list[last]} ");
        return sum;
      }

      average = AverageAndHigher(list, last, sum: sum + list[last]);

      if (list[last] > average) Console.WriteLine($"Maior que média: {list[last]} ");

      return average;
    }

    public static void DisplayList(List<int> list)
    {
      if (list.Count > 0) Console.Write(list[0]);

      for (int i = 1; i < list.Count; i++)
      {
        Console.Write($", {list[i]}");
      }

      Console.WriteLine(".");
    }
  }
}
