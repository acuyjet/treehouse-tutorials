using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


//Add work from Sets and Dictionaries section of C# Collections course, including code challenges

namespace CodeChallenge
{
    public class LexicalAnalysis
    {
        public static Dictionary<string, int> WordCount = new Dictionary<string, int>();
        public static Dictionary<string, int> NumberOfWordsAboveCount = new Dictionary<string, int>();

        public void AddWord(string word)
        {
            if (!WordCount.ContainsKey(word))
            {
                WordCount.Add(word, 1);
            }
            else
            {
                WordCount[word] += 1;
            }
        }
        public static Dictionary<string, int> WordsWithCountGreaterThan(int count)
        {
            foreach (var word in WordCount)
            {
                //determine if value is greater than count
                if (word.Value > count)
                {
                    //if it is, add to dictionary
                    string wordKey = word.Key;
                    int wordValue = word.Value;
                    NumberOfWordsAboveCount.Add(word.Key, wordValue);
                }
            }
            return NumberOfWordsAboveCount; 
        }
    }
}

    

