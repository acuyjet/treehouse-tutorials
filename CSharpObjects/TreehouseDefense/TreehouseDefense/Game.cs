using System;

namespace TreehouseDefense
{
    class Game
    {
        public static void Main()
        {
            Map map = new Map(8, 5);

            try
            {
                Path path = new Path(
                        new[]{
                        new MapLocation(0, 2, map),
                        new MapLocation(1, 2, map),
                        new MapLocation(2, 2, map),
                        new MapLocation(3, 2, map),
                        new MapLocation(4, 2, map),
                        new MapLocation(5, 2, map),
                        new MapLocation(6, 2, map),
                        new MapLocation(7, 2, map)
                        }
                    );

                Invader[] invaders =
                { new ShieldedInvader(path),
                  new FastInvader(path),
                  new StrongInvader(path),
                  new Invader(path)
                };

                //TODO: Prompt user to place towers via command-line
                Console.WriteLine("Enter x coordinate for Tower 1:");
                string towerOneX = Console.ReadLine();
                Console.WriteLine("Enter y coordinate for Tower 1:");
                string towerOneY = Console.ReadLine();
                Console.WriteLine("Enter x coordinate for Tower 2:");
                string towerTwoX = Console.ReadLine();
                Console.WriteLine("Enter y coordinate for Tower 2:");
                string towerTwoY = Console.ReadLine();
                Console.WriteLine("Enter x coordinate for Tower 3:");
                string towerThreeX = Console.ReadLine();
                Console.WriteLine("Enter y coordinate for Tower 3:");
                string towerThreeY = Console.ReadLine();


                Tower[] towers =
                {
                    new Tower(new MapLocation(int.Parse(towerOneX), int.Parse(towerOneY), map)),
                    new Tower(new MapLocation(int.Parse(towerTwoX), int.Parse(towerTwoY), map)),
                    new Tower(new MapLocation(int.Parse(towerThreeX), int.Parse(towerThreeY), map)),
                };

                //Construct Level object and pass it the invaders that will be in the level
                Level level = new Level(invaders)
                {
                    Towers = towers
                };

                bool playerWon = level.Play();

                Console.WriteLine("Player " + (playerWon ? "won" : "lost"));

            }
            catch (OutOfBoundsException ex)
            {
                Console.WriteLine(ex.Message);
            }
            catch (TreehouseDefenseException)
            {
                Console.WriteLine("Unhandled TreeHouseDefenseException");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Unhandled Exception: " + ex);
            }
        }
    }
}
//TODO: One of the practice problems from the C# Objects Wrap Up video