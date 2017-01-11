using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MorseCodeTranslator
{
    static class MorseCodeTranslator
    {
        private static Dictionary<char, string> _textToMorse = new Dictionary<char, string>
        {
            {' ', "/"},
            {'A', ".-"},
            {'B', "-..."},
            {'C', "-.-."},
            {'D', "-.."},
            {'E', "."},
            {'F', "..-."},
            {'G', "--."},
            {'H', "...."},
            {'I', ".."},
            {'J', ".---"},
            {'K', "-.-"},
            {'L', ".-.."},
            {'M', "--"},
            {'N', "-."},
            {'O', "---"},
            {'P', ".--."},
            {'Q', "--.-"},
            {'R', ".-."},
            {'S', "..."},
            {'T', "-"},
            {'U', "..-"},
            {'V', "...-"},
            {'W', ".--"},
            {'X', "-..-"},
            {'Y', "-.--"},
            {'Z', "--.."},
            {'1', ".----"},
            {'2', "..---"},
            {'3', "...--"},
            {'4', "....-"},
            {'5', "....."},
            {'6', "-...."},
            {'7', "--..."},
            {'8', "---.."},
            {'9', "----."},
            {'0', "-----"},
            {',', "--..--"},
            {'.', ".-.-.-"},
            {'?', "..--.."},
            {';', "-.-.-."},
            {':', "---..."},
            {'/', "-..-."},
            {'-', "-....-"},
            {'\'', ".----."},
            {'"', ".-..-."},
            {'(', "-.--."},
            {')', "-.--.-"},
            {'=', "-...-"},
            {'+', ".-.-."},
            {'@', ".--.-."},
            {'!', "-.-.--"},
            {'Á', ".--.-"},
            {'É', "..-.."},
            {'Ö', "---."},
            {'Ä', ".-.-"},
            {'Ñ', "--.--"},
            {'Ü', "..--"}
        };

        private static Dictionary<string, char> _morseToText = new Dictionary<string, char>();

        static MorseCodeTranslator()
        {
            foreach (KeyValuePair<char, string> code in _textToMorse)
            {
                _morseToText.Add(code.Value, code.Key);
            }
        }

        public static string ToMorse(string textInput)
        {
            List<string> morseOutput = new List<string>(textInput.Length);

            foreach (char character in textInput.ToUpper())
            {
                try
                {
                    string morseCode = _textToMorse[character];
                    morseOutput.Add(morseCode);
                }
                catch (KeyNotFoundException)
                {
                    morseOutput.Add("!");
                }
            }
            return string.Join(" ", morseOutput);
        }

        public static string ToText(string morseInput)
        {
            List<char> textOutput = new List<char>(morseInput.Length);

            foreach (var morseString in morseInput)
            {
                try
                {
                    char letter = _morseToText[morseString.ToString()];
                    textOutput.Add(letter);
                }
                catch (KeyNotFoundException)
                {
                    textOutput.Add('!');
                }
            }
            return string.Join(" ", textOutput);
        }
    }
}
