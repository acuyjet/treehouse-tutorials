using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TreehouseDefense
{
    class SuperTower : Tower
    {
        protected override int Range { get; } = 2;
        protected override int Power { get; } = 2;
        protected override double Accuracy { get; } = 0.99;

        public SuperTower(MapLocation location) : base(location)
        {
        }

    }
}

//TODO: Add more types of towers
