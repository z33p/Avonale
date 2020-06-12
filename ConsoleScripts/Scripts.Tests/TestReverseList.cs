using System;
using System.Collections.Generic;
using Xunit;
using static Scripts.Avonale;

namespace Scripts.Tests
{
  public class UnitTest1
  {
    List<int> numbers = new List<int> { 7, 1, 9, 3, 5, 17 };

    [Fact]
    public void TestReverseList()
    {
      var reversed = ReverseList(numbers, numbers.Count);

      numbers.Reverse();
      Assert.Equal(reversed, numbers);
    }
  }
}
