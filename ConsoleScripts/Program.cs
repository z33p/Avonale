using System;
using System.Collections.Generic;

namespace ConsoleScripts
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");

      var numbers = new List<int> { 7, 1, 5, 2, 3 };

      printBackwards(numbers, numbers.Count);
    }

    static void printBackwards(List<int> list, int length)
    {
      // Recursivo que retorne uma lista de forma invertida.

      Console.Write($"{list[--length]} ");

      if (length > 0)
        printBackwards(list, length);
    }
  }
}
