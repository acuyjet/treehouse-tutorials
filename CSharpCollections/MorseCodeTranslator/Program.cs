using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MorseCodeTranslator
{
    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.Write("Text to translate (or Enter to quit): ");
                string textInput = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(textInput))
                {
                    break;
                }

                string morseOutput = MorseCodeTranslator.ToMorse(textInput);
                Console.WriteLine(morseOutput);
            }

            while (true)
            {
                Console.Write("Morse to translate (or Enter to quit): ");
                string morseInput = Console.ReadLine();

                if (string.IsNullOrWhiteSpace(morseInput))
                {
                    break;
                }

                string textOutput = MorseCodeTranslator.ToText(morseInput);
                Console.WriteLine(textOutput);
            }
        }
    }
}
