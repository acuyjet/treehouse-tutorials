using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QueryingWithLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            Action<string> sayGreeting;

            Func<string, string> converse = (message) =>
            {
                Console.WriteLine(message);
                return Console.ReadLine();
            };

            string input = converse("What's your name?");

            sayGreeting = (greeting) =>
            {
                Console.WriteLine(string.Format(greeting, input));
            };

            sayGreeting("Hello, {0}");
            converse("Nice to see you.");
            converse("Say hi to your mother for me.");
            sayGreeting("Goodbye, {0}");
        }
    }
}
