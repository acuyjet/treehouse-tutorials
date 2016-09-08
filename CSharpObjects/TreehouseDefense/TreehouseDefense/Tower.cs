using System;

namespace TreehouseDefense
{
    class Tower
    {
        private const int _range = 1;
        private const int _power = 1;
        private const double _accuracy = 0.75;

        private static readonly Random _random = new Random();

        private readonly MapLocation _location;

        public Tower(MapLocation location)
        {
            _location = location;
        }

        public bool IsSuccessfulShot()
        {
            return _random.NextDouble() < _accuracy;
        }

        public void FireOnInvaders(Invader[] invaders)
        {
            foreach (Invader invader in invaders)
            {
                if (invader.IsActive && _location.InRangeOf(invader.Location, _range))
                {
                    if (IsSuccessfulShot())
                    {
                        invader.DecreaseHealth(_power);
                        Console.WriteLine("You hit an invader!");

                        if (invader.IsDead)
                        {
                            Console.WriteLine("You destroyed an invader!");
                        }
                    }
                    else
                    {
                        Console.WriteLine("You missed an invader!");
                    }
                    break;
                }
            }
        }
        //TODO: Ensure towers can't be placed on paths (refer to MapLocation.cs)
    }
}