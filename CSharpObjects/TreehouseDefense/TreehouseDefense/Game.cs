using System;

namespace TreehouseDefense
{
    class Game
    {
        public static void Main()
        {
            Map map = new Map(8,5);

            //int area = map.Width * map.Height;

            Point point = new Point(4,2);
            
            Console.WriteLine(point.DistanceTo(5, 5));
        }
    }
}