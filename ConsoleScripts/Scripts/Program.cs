using System;
using System.Collections.Generic;
using static Scripts.Avonale;

namespace Scripts
{
  class Program
  {
    static List<int> numbers = new List<int> { 7, 1, 9, 3, 5, 17 };

    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");

      DisplayList(numbers);

      DisplayList(ReverseList(numbers, numbers.Count));

      AverageAndHigher(numbers, numbers.Count);

      Console.WriteLine();
    }
  }
}
