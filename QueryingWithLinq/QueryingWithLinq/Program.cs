using BirdWatcher;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BirdWatcher
{
    class Program
    {
        static void Main(string[] args)
        {
            //Functional Programming in C#
            //    Action<string> sayGreeting;

            //    Func<string, string> converse = (message) =>
            //    {
            //        Console.WriteLine(message);
            //        return Console.ReadLine();
            //    };

            //    string input = converse("What's your name?");

            //    sayGreeting = (greeting) =>
            //    {
            //        Console.WriteLine(string.Format(greeting, input));
            //    };

            //    sayGreeting("Hello, {0}");
            //    converse("Nice to see you.");
            //    converse("Say hi to your mother for me.");
            //    sayGreeting("Goodbye, {0}");

            //    var numbers = new List<int> { 2, 4, 8, 16, 32, 64 };
            //    numbers.Where(n => n > 10);

            //var birds = BirdRepository.LoadBirds();
            //birds.Count();
            //birds.SelectMany(b => b.Sightings).Count();
            //var answer = birds.Select(b => b.Sightings.Count()).Average();

            //Console.WriteLine(answer);
            //Console.ReadLine();


            //BirdSearch in Action
            //var searchParameters = new BirdSearch
            //{
            //    Size = "Medium",
            //    Country = "United States",
            //    Colors = new List<string> { "white", "brown", "black" },
            //    Page = 0,
            //    PageSize = 5
            //};
            //Console.WriteLine("Type any key to begin search.");
            //var birds = BirdRepository.LoadBirds();

            //while (Console.ReadKey().KeyChar != 'q')
            //{
            //    Console.WriteLine($"Page: {searchParameters.Page}");

            //    birds.Search(searchParameters).ToList().ForEach(b =>
            //    {
            //        Console.WriteLine($"Common Name: {b.CommonName}");
            //    });

            //    searchParameters.Page++;
            //}

            //Which Is Faster? Union versus Concat
            var listA = Enumerable.Range(0, 100000);
            var listB = Enumerable.Range(50000, 100000);

            Stopwatch stopwatch = new Stopwatch();

            stopwatch.Start();
            var listC = listA.Union(listB);stopwatch.Stop();
            var unionTicks = stopwatch.ElapsedTicks;

            stopwatch.Restart();
            var listD = listA.Concat(listB).Distinct();
            stopwatch.Stop();
            var concatTicks = stopwatch.ElapsedTicks;

            Console.WriteLine(string.Format("Union took {0} ticks.", unionTicks));
            Console.WriteLine(string.Format("Concat took {0} ticks.", concatTicks));
            if (unionTicks > concatTicks)
            {
                Console.WriteLine(string.Format("Concats is faster by {0} ticks", unionTicks - concatTicks));
            }
            else if (concatTicks > unionTicks)
            {
                Console.WriteLine(string.Format("Union is faster by {0} ticks", concatTicks - unionTicks));
            }
            else
            {
                Console.WriteLine("No difference between concat and union!");
            }
        }
    }
}
